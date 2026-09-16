import fs from 'fs';
import path from 'path';

const IMAGES = [
  {
    path: 'public/images/hero-pc-parts.jpg',
    url: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=1000&auto=format&fit=crop&q=80',
  },
  {
    path: 'public/images/deal-monitors.jpg',
    url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80',
  },
  {
    path: 'public/images/deal-cabinet.jpg',
    url: 'https://images.unsplash.com/photo-1587202372583-49330a15584d?w=800&auto=format&fit=crop&q=80',
  },
  {
    path: 'public/images/products/product-1.jpg',
    url: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop&q=80',
  },
  {
    path: 'public/images/products/product-2.jpg',
    url: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&auto=format&fit=crop&q=80',
  },
  {
    path: 'public/images/products/product-3.jpg',
    url: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&auto=format&fit=crop&q=80',
  },
  {
    path: 'public/images/products/product-4.jpg',
    url: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=600&auto=format&fit=crop&q=80',
  },
  {
    path: 'public/images/products/product-5.jpg',
    url: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=600&auto=format&fit=crop&q=80',
  },
  {
    path: 'public/images/products/product-6.jpg',
    url: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=600&auto=format&fit=crop&q=80',
  },
  {
    path: 'public/images/products/product-7.jpg',
    url: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&auto=format&fit=crop&q=80',
  },
  {
    path: 'public/images/products/product-8.jpg',
    url: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&auto=format&fit=crop&q=80',
  },
  {
    path: 'public/images/products/product-9.jpg',
    url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80',
  },
  {
    path: 'public/images/products/product-10.jpg',
    url: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&auto=format&fit=crop&q=80',
  },
  {
    path: 'public/images/products/product-11.jpg',
    url: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&auto=format&fit=crop&q=80',
  },
  {
    path: 'public/images/products/product-12.jpg',
    url: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=600&auto=format&fit=crop&q=80',
  },
];

async function downloadAll() {
  for (const item of IMAGES) {
    try {
      const dir = path.dirname(item.path);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      if (fs.existsSync(item.path) && fs.statSync(item.path).size > 1000) {
        console.log(`Already exists: ${item.path}`);
        continue;
      }
      console.log(`Fetching ${item.path}...`);
      const res = await fetch(item.url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const arrayBuffer = await res.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      fs.writeFileSync(item.path, buffer);
      console.log(`Saved ${item.path} (${buffer.length} bytes)`);
    } catch (e) {
      console.error(`Failed ${item.path}:`, e.message);
    }
  }
}

downloadAll();
