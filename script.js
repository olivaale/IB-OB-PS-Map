const sections = [
    { id: 'CV101', x: 100, y: 150, width: 80, height: 30, details: 'Inbound Conveyor 101' },
    { id: 'CV102', x: 200, y: 180, width: 90, height: 30, details: 'Inbound Conveyor 102' },
    { id: 'CV201', x: 300, y: 220, width: 85, height: 30, details: 'Outbound Conveyor 201' }
];

const overlay = document.getElementById('overlay');
const infoBox = document.getElementById('info-box');
const conveyorId = document.getElementById('conveyor-id');
const conveyorDetails = document.getElementById('conveyor-details');

sections.forEach(section => {
    const div = document.createElement('div');
    div.style.left = section.x + 'px';
    div.style.top = section.y + 'px';
    div.style.width = section.width + 'px';
    div.style.height = section.height + 'px';
    div.title = section.id;
    div.onclick = () => {
        conveyorId.textContent = 'ID: ' + section.id;
        conveyorDetails.textContent = section.details;
        infoBox.classList.remove('hidden');
    };
    overlay.appendChild(div);
});