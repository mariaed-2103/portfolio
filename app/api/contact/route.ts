import { NextResponse } from "next/server"

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json()

        // 1. Validação básica dos campos
        if (!name || !email || !message) {
            return NextResponse.json({ error: "Todos os campos são obrigatórios" }, { status: 400 })
        }

        // 2. Validação de formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: "Email inválido" }, { status: 400 })
        }

        // 3. Verificação das chaves de ambiente
        const RESEND_API_KEY = process.env.RESEND_API_KEY
        const CONTACT_EMAIL = process.env.CONTACT_EMAIL

        if (!RESEND_API_KEY || !CONTACT_EMAIL) {
            console.error("Configuração de email ausente (.env.local)")
            return NextResponse.json({ error: "Serviço de email não configurado" }, { status: 500 })
        }

        // 4. Envio para a API do Resend
        const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                // O 'from' DEVE ser onboarding@resend.dev (para testes) ou um domínio verificado seu
                from: "Portfolio <onboarding@resend.dev>",

                // O 'to' deve ser o seu email verificado (definido no .env.local)
                to: CONTACT_EMAIL,

                // O 'reply_to' permite que você clique em "Responder" e vá direto para a pessoa
                reply_to: email,

                subject: `Novo contato de ${name} - Portfolio`,
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
                <p>Para responder, basta clicar em "Responder" no seu cliente de email.</p>
              </div>
            </body>
          </html>
        `,
            }),
        })

        // 5. Tratamento de erro da API do Resend
        if (!response.ok) {
            const error = await response.text()
            console.error("Erro Resend API:", error)
            return NextResponse.json({ error: "Erro ao enviar email" }, { status: 500 })
        }

        // 6. Sucesso
        return NextResponse.json({ success: true, message: "Email enviado com sucesso!" }, { status: 200 })

    } catch (error) {
        console.error("Erro no servidor:", error)
        return NextResponse.json({ error: "Erro ao processar a requisição" }, { status: 500 })
    }
}