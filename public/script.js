const API_URL = 'http://localhost:5050'; // Your Express server

// Fetch and display flowers
async function loadFlowers() {
  const res = await fetch(API_URL+'/api');
  const flowers = await res.json();

  const list = document.getElementById('flowerList');
  list.innerHTML = '';

  flowers.forEach(flower => {
    const card = document.createElement('div');
    card.className = 'flower-card';
    console.log("oioiooio");
    card.innerHTML = `
      <img src="${flower.image || 'https://via.placeholder.com/200'}" alt="${flower.name}">
      <h3>${flower.name}</h3>
      <p>${flower.description}</p>
      <button class="delete-btn" onclick="deleteFlower(${flower.ID})">Delete</button>
    `;
    list.appendChild(card);
  });
}

// Add a new flower
document.getElementById('addFlowerForm').addEventListener('submit', async e => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const image = document.getElementById('image').value;

  await fetch(API_URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ name, description, image })
  });

  e.target.reset();
  loadFlowers();
});

// Delete a flower
async function deleteFlower(id) {
  if (confirm('Are you sure you want to delete this flower?')) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    loadFlowers();
  }
}

// Load flowers on page load
loadFlowers();
