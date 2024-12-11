const prompts = [
    "Think about one thing that you really wanted and got in the past",
    "Was there a point where even that dream felt unachievable?",
    "Similarly, you will also align with this dream",
    "Keeping faith in yourself and the Higher Power"
  ];
  
  let currentPromptIndex = 0;
  
  // Update the card text with the next prompt
  const nextPromptButton = document.getElementById("next-prompt-button");
  const promptCard = document.getElementById("prompt-card");
  
  nextPromptButton.addEventListener("click", () => {
    currentPromptIndex = (currentPromptIndex + 1) % prompts.length; // Loop through prompts
    promptCard.textContent = prompts[currentPromptIndex];
  });
  
//   // Continue button logic
//   const continueButton = document.getElementById("continue-button");
//   const userResponse = document.getElementById("user-response");
//   const next = document.getElementById("container-3");
//   console.log(next);
//   continueButton.addEventListener("click", () => {
//     const response = userResponse.value.trim();
//     if (response) {
//       alert(`Your response: "${response}" has been saved!`);
//       userResponse.value = ""; // Clear the input
//         window.scrollBy(0, +window.innerHeight);
//     } else {
//       alert("Please write something before continuing.");
//     }
//   });
  