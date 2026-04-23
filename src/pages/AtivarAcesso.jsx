import React from "react";

export default function AtivarAcesso() {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.check}>✔</div>

        <h1 style={styles.title}>Pagamento confirmado!</h1>

        <p style={styles.text}>
          Seu pagamento foi aprovado com sucesso.
          Agora fale com nosso suporte para liberar seu acesso ao sistema.
        </p>

        <div style={styles.steps}>
          <p>1️⃣ Clique no botão abaixo</p>
          <p>2️⃣ Fale com nosso suporte</p>
          <p>3️⃣ Receba seu acesso liberado</p>
        </div>

        <a
          href="https://api.whatsapp.com/send?phone=5563992393705&text=Olá!%20Acabei%20de%20pagar%20e%20quero%20ativar%20meu%20acesso."
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          Falar com suporte no WhatsApp
        </a>

        <p style={styles.footer}>Gestão Pessoal ©</p>
      </div>
    </div>
  );
}

const styles = {
  body: {
    background: "#0b0b0b",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff"
  },
  container: {
    textAlign: "center",
    background: "#111",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 0 30px rgba(0,255,120,0.15)",
    maxWidth: "500px"
  },
  check: {
    fontSize: "60px",
    color: "#00ff88",
    marginBottom: "20px"
  },
  title: {
    marginBottom: "10px"
  },
  text: {
    color: "#aaa",
    marginBottom: "20px"
  },
  steps: {
    marginBottom: "30px",
    textAlign: "left"
  },
  button: {
    display: "inline-block",
    padding: "15px 25px",
    background: "#00ff88",
    color: "#000",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "bold"
  },
  footer: {
    marginTop: "20px",
    fontSize: "12px",
    color: "#666"
  }
};
