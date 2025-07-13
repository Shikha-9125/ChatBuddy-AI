document.getElementById("submit").addEventListener("click", async () => {
  const question = document.getElementById("question").value.trim();
  if (!question) return alert("Please enter a question!");

  document.getElementById("answer").textContent = "Thinking...";

  try {
    const response = await fetch("/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question })
    });

    const data = await response.json();
    document.getElementById("answer").textContent = data.answer || "No answer received.";
  } catch (err) {
    console.error(err);
    document.getElementById("answer").textContent = "Error connecting to server.";
  }
});
