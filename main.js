const searchInput = document.querySelector('.hero-input');
const agentList = document.getElementById('agent-list');
const agentDetail = document.getElementById('agent-detail');

function renderList(query = '') {
    agentList.innerHTML = '';
    const filtered = window.agents.filter(agent => {
        const nameMatch = agent.name.toLowerCase().includes(query.toLowerCase());
        const workflowMatch = [1, 2, 3].some(i => 
            (agent[`workflow_${i}`] || '').toLowerCase().includes(query.toLowerCase())
        );
        return nameMatch || workflowMatch;
    });

    if (searchInput.value.trim() === '') {
        agentList.style.display = 'none';
        return;
    } else {
        agentList.style.display = 'block';
    }

    if (filtered.length === 0) {
        const notFoundDiv = document.createElement('div');
        notFoundDiv.textContent = 'AI Agent not found';
        notFoundDiv.style.fontFamily = 'Formular-300';
        notFoundDiv.style.fontSize = 'clamp(1rem, 8vw, 1.9rem)';
        notFoundDiv.style.color = 'var(--base-black-color)';
        agentList.appendChild(notFoundDiv);
        return;
    }

    filtered.forEach(agent => {
        const div = document.createElement('div');
        div.className = 'agent';
        div.innerHTML = `
            <a href="agent.html?name=${encodeURIComponent(agent.name)}">
                <strong>${agent.name}</strong>
            </a>
        `;
        agentList.appendChild(div);
    });
}

searchInput.addEventListener('input', () => {
    renderList(searchInput.value);
});

window.addEventListener('load', () => {
    renderList();
});
