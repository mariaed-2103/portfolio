import { NextResponse } from "next/server"

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json()

        // Validação básica
        if (!name || !email || !message) {
            return NextResponse.json({ error: "Todos os campos são obrigatórios" }, { status: 400 })
        }

        // Validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: "Email inválido" }, { status: 400 })
        }

        // Usando Resend para enviar o email
        const RESEND_API_KEY = process.env.RESEND_API_KEY

        if (!RESEND_API_KEY) {
            console.error("RESEND_API_KEY não configurada")
            return NextResponse.json({ error: "Serviço de email não configurado" }, { status: 500 })
        }

        const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: "Portfolio <onboarding@resend.dev>", // Email verificado no Resend
                to: "mariaedzinattoo@gmail.com", // Seu email
                reply_to: email, // Email de quem enviou
                subject: `Novo contato de ${name}`,
                html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body {
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                  line-height: 1.6;
                  color: #333;
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                }
                .header {
                  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                  color: white;
                  padding: 30px;
                  border-radius: 10px 10px 0 0;
                  text-align: center;
                }
                .content {
                  background: #f9f9f9;
                  padding: 30px;
                  border-radius: 0 0 10px 10px;
                }
                .field {
                  margin-bottom: 20px;
                }
                .label {
                  font-weight: 600;
                  color: #667eea;
                  margin-bottom: 5px;
                }
                .value {
                  background: white;
                  padding: 15px;
                  border-radius: 5px;
                  border-left: 4px solid #667eea;
                }
                .footer {
                  text-align: center;
                  margin-top: 30px;
                  padding-top: 20px;
                  border-top: 1px solid #ddd;
                  color: #666;
                  font-size: 14px;
                }
              </style>
            </head>
            <body>
              <div class="header">
                <h1 style="margin: 0;">📧 Nova Mensagem do Portfolio</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Nome:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <div class="label">Mensagem:</div>
                  <div class="value">${message.replace(/\n/g, "<br>")}</div>
                </div>
              </div>
              <div class="footer">
                <p>Esta mensagem foi enviada através do formulário de contato do seu portfolio.</p>
                <p>Você pode responder diretamente para o email: ${email}</p>
              </div>
            </body>
          </html>
        `,
            }),
        })

        if (!response.ok) {
            const error = await response.text()
            console.error("Erro Resend:", error)
            return NextResponse.json({ error: "Erro ao enviar email" }, { status: 500 })
        }

        return NextResponse.json({ success: true, message: "Email enviado com sucesso!" }, { status: 200 })
    } catch (error) {
        console.error("Erro no envio de email:", error)
        return NextResponse.json({ error: "Erro ao processar a requisição" }, { status: 500 })
    }
}
