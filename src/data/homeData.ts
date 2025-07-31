// data/homeData.ts

// Data for home page products
export const homeProducts = [
  {
    id: 'porta',
    title: 'Portas de Vidro',
    description: 'Portas em vidro temperado com diversos sistemas de abertura e acabamentos. Ideais para residências e espaços comerciais.',
    // Agora 'images' é um array de caminhos de imagem
    images: [

      '/amberglass/images/portas/porta-1.jpg',
      '/amberglass/images/portas/porta-2.jpg',
      '/amberglass/images/portas/porta-3.jpg',
    ],
  },
  {
    id: 'box',
    title: 'Box para Banheiro',
    description: 'Soluções modernas e funcionais para o seu banheiro, com vidros temperados e ferragens de alta qualidade.',
    // Agora 'images' é um array de caminhos de imagem
    images: [
      '/images/product-shower-1.jpg', // Exemplo: primeira imagem do box
      '/images/product-shower-2.jpg', // Exemplo: segunda imagem do box
      '/images/product-shower-3.jpg', // Exemplo: terceira imagem do box
    ],
  },
  {
    id: 'guarda-corpo',
    title: 'Guarda Corpo',
    description: 'Proteção e estética para sacadas, mezaninos e escadas. Modelos com fixação no piso ou lateral.',
    // Agora 'images' é um array de caminhos de imagem
    images: [
      '/images/product-railing-1.jpg', // Exemplo: primeira imagem do guarda-corpo
      '/images/product-railing-2.jpg', // Exemplo: segunda imagem do guarda-corpo
      '/images/product-railing-3.jpg', // Exemplo: terceira imagem do guarda-corpo
    ],
  },
];

// Data for home page image carousel
export const homeImages = [
  {
    src: '/images/project-1.jpg',
    alt: 'Fachada de vidro em edifício comercial',
  },
  {
    src: '/images/project-2.jpg',
    alt: 'Guarda corpo em vidro em residência moderna',
  },
  {
    src: '/images/project-3.jpg',
    alt: 'Escada com guarda corpo em vidro',
  },
  {
    src: '/images/project-4.jpg',
    alt: 'Box de vidro em banheiro de luxo',
  },
  {
    src: '/images/project-5.jpg',
    alt: 'Divisória de ambiente em vidro',
  },
];

// Data for testimonials
export const testimonials = [
  {
    name: 'Ana Silva',
    role: 'Arquiteta',
    avatar: '/images/testimonial-1.jpg',
    text: 'Trabalho com a AmberGlass há mais de 5 anos e sempre ficamos satisfeitos com a qualidade dos produtos e o profissionalismo da equipe. Os projetos são entregues dentro do prazo e com acabamento impecável.',
    rating: 5,
  },
  {
    name: 'Roberto Mendes',
    role: 'Cliente Residencial',
    avatar: '/images/testimonial-2.jpg',
    text: 'Contratei a AmberGlass para instalação de guarda-corpos na minha casa. O atendimento foi excelente desde o orçamento até a finalização. Recomendo fortemente.',
    rating: 5,
  },
  {
    name: 'Carla Rodrigues',
    role: 'Designer de Interiores',
    avatar: '/images/testimonial-3.jpg',
    text: 'Os produtos da AmberGlass têm um acabamento excepcional e a equipe de instalação é muito profissional. Sempre indico para meus clientes que buscam qualidade e bom atendimento.',
    rating: 5,
  },
];