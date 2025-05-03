document.addEventListener("DOMContentLoaded", () => {
    const agentsContainer = document.querySelector('.agents');
    const agents = JSON.parse(localStorage.getItem('agents'));

    if (!agents || !Array.isArray(agents)) {
        agentsContainer.innerHTML = '<p>No agents found.</p>';
        return;
    }

    const backgrounds = [
        'url("images/lar-1.png")',
        'url("images/lar-2.png")',
        'url("images/lar-3.png")',
        'url("images/lar-4.png")'
    ];

    agents.forEach((agent, index) => {
        const agentCardLink = document.createElement('a');
        agentCardLink.href = `agent.html?name=${encodeURIComponent(agent.name)}`;
        agentCardLink.className = 'agent-card-link'; // Добавь стили, если нужно

        const agentCard = document.createElement('div');
        agentCard.className = 'agent-card';

        // Устанавливаем фон для каждого агента, циклично
        agentCard.style.backgroundImage = backgrounds[index % backgrounds.length];
        agentCard.style.backgroundRepeat = 'no-repeat';
        agentCard.style.backgroundPosition = 'center';
        agentCard.style.backgroundSize = 'cover';

        const name = document.createElement('h2');
        name.textContent = agent.name;
        agentCard.appendChild(name);

        const workflowsTitle = document.createElement('p');
        workflowsTitle.className = 'workflows';
        workflowsTitle.textContent = 'Workflows';
        agentCard.appendChild(workflowsTitle);

        for (let i = 1; i <= 3; i++) {
            const workflow = document.createElement('p');
            workflow.textContent = agent[`workflow_${i}`];
            workflow.className = 'workflows-item';
            agentCard.appendChild(workflow);
        }

        agentCardLink.appendChild(agentCard);
        agentsContainer.appendChild(agentCardLink);
    });
});
