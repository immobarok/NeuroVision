import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './main-images.jpg'
import sample_img_2 from './main-images-2.jpg'
import profile_img_1 from './user_1.jpg'
import profile_img_2 from './user_2.jpg'
import profile_img_3 from './user_3.jpg'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import user_icon from './user2.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'
import logo1 from './logo1.jpg'

export const assets = {
  logo,
  logo1,
  logo_icon,
  facebook_icon,
  instagram_icon,
  twitter_icon,
  star_icon,
  rating_star,
  sample_img_1,
  sample_img_2,
  email_icon,
  lock_icon,
  cross_icon,
  star_group,
  credit_star,
  profile_icon,
  user_icon
}

export const stepsData = [
  {
    title: 'Describe Your Vision',
    description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
    icon: step_icon_1,
  },
  {
    title: 'Watch the Magic',
    description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
    icon: step_icon_2,
  },
  {
    title: 'Download & Share',
    description: 'Instantly download your creation or share it with the world directly from our platform.',
    icon: step_icon_3,
  },
];
export const testimonialsData = [
  {
    image: profile_img_1,
    name: 'Ariana Chowdhury',
    role: 'UI/UX Designer',
    stars: 5,
    text: `This platform has completely transformed how I present my work. The background removal is fast, accurate, and blends perfectly with my design workflow.`,
  },
  {
    image: profile_img_2,
    name: 'Jahidul Hasan',
    role: 'Digital Marketer',
    stars: 5,
    text: `As someone who handles dozens of product photos daily, It’s more and  accurate, fast, and doesn’t this tool is a lifesaver. It’s simple, intuitive, and saves me hours of editing time.`,
  },
  {
    image: profile_img_3,
    name: 'Nabila Karim',
    role: 'E-commerce Entrepreneur',
    stars: 5,
    text: `I use this tool for all my product images. It’s accurate, fast, and doesn’t require any technical skills. Highly recommended for small business owners!`,
  },
];


export const plans = [
  {
    id: 'Basic',
    price: 10,
    credits: 100,
    desc: 'Best for personal use.'
  },
  {
    id: 'Advanced',
    price: 50,
    credits: 500,
    desc: 'Best for business use.'
  },
  {
    id: 'Business',
    price: 250,
    credits: 5000,
    desc: 'Best for enterprise use.'
  },
]