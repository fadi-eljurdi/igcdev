import store from './store.js'
import utilities from './utilities.js'
const app = Vue.createApp({
    data() {
        return {
            title: 'Spectrum',
            spinner: false,
            api: 'https://script.google.com/macros/s/AKfycbyV7JY10hCStCNKVo_mLbhNcAzXFkHviUFYStVM6xdjWhkRJ4LZiyzQg2K7XJU8s3YpBw/exec',
            store,
            utilities,
            profile:{
                "contact": {
                    "email": "info@jurdiconsult.media",
                    "number": "7164869068",
                    "whatsapp": "+17167309932",
                    "linkedIn": "https://www.linkedin.com/company/88963469/admin/",
                    "address": "USA",
                    "logo": "https://drive.google.com/uc?id=1YQEqz6LhZ8LQqvTtw6HZa3Rt3UiqshZ9&export=view",
                    "heading": "A Welcome Note ",
                    "bio": "Jurdi Media Production Consultants is your trusted gaming and general media consultancy firm, that specialised in providing services to businesses that are involved or seeking involvement in the entertainment industry between America and the Middle Eastern, North African and Turkish Markets. Our team offers comprehensive guidance and innovative solutions tailored to meet the unique needs and challenges faced by enterprises operating in these diverse regions. We take pride in being a trusted partner for businesses operating or aspiring to operate in the entertainment sector across the MENAT region. We offer strategic consulting services and cutting-edge media solutions to help organizations maximize their potential and achieve sustainable growth in these lucrative markets.",
                    "video": "EL-gQEZPEmc",
                    "sHeading": "Tailored Media and Gaming Services",
                    "sTagline": "Unleash your potential with personalized media consultancy services",
                    "bHeading": "Expand Your Knowledge",
                    "bTagline": "Expand your knowledge and understanding of a wide range of topics.\n"
                },
                "links": [
                    {
                        "index": "1",
                        "text": "Jurdi & Co",
                        "id": "Links-1",
                        "url": "http://www.jurdilaw.com"
                    }
                ],
                "blogs": [
                    {
                        "index": "1",
                        "date": "2023-05-26T04:33:29.419Z",
                        "id": "Blogs-1",
                        "title": "From ATARI to Activision Blizzard",
                        "description": "Discover the amazing journey of video games with our comprehensive guide. From the classic ATARI to the cutting-edge of Activision Blizzard, follow the evolution step by step. Explore the roots of the industry and its dazzling transformation, from simplistic graphics to immersive storytelling and mind-bending technology. Join us on this captivating adventure through the history of video games and rediscover their amazing past and exciting future.",
                        "thumbnail": "https://drive.google.com/uc?id=134P2D8ufL2lE3EG80_6RoVzynsZa0BQD&export=view",
                        "url": "https://jurdiconsult.media/blogs/from-atari-to-activision-blizzard.html"
                    },
                    {
                        "index": "2",
                        "date": "2023-05-26T04:43:20.407Z",
                        "id": "Blogs-2",
                        "title": "Is Unscripted TV in the MENA on the decline?",
                        "description": "Discover the reasons behind the decline of unscripted TV shows in the Middle East and North Africa with \"Fading Foreign Reality.\" This insightful piece delves into the cultural and political factors affecting the region's television landscape and offers potential solutions for a brighter future.",
                        "thumbnail": "https://drive.google.com/uc?id=1gvjaypBBeFpeHrDOjMEcOk5JqaxHdAre&export=view",
                        "url": "https://jurdiconsult.media/blogs/is-unscripted-tv-in-the-mena-on-the-decline.html"
                    },
                    {
                        "index": "3",
                        "date": "2023-05-26T04:51:06.218Z",
                        "id": "Blogs-3",
                        "title": "Game On: Exploring the Thriving Gaming Industry in the MENAT Region",
                        "description": "Discover the booming gaming industry in the Middle East, North Africa, and Turkey (MENAT) region with 'Game On' - your ultimate guide to exploring this thriving entertainment industry. From high-tech advancements to unique cultural influences, learn how the MENAT gaming scene is taking the world by storm.",
                        "thumbnail": "https://drive.google.com/uc?id=1ibTxhOxWlnuPUcEvOLQJfLb_2JReXZcr&export=view",
                        "url": "https://jurdiconsult.media/blogs/game-on-exploring-the-thriving-gaming-industry-in-the-menat-region.html"
                    },
                    {
                        "index": "4",
                        "date": "2023-05-26T05:03:15.421Z",
                        "id": "Blogs-4",
                        "title": "Theatrical Business in Saudi Arabia",
                        "description": "Discover the exciting future of cinema in Saudi Arabia with \"The Return of Cinema\"! This comprehensive guide explores the booming theatrical business and offers essential tips for navigating this lucrative market. Whether you're a filmmaker, distributor, or theater owner, this book is your ultimate roadmap to success in the dynamic Saudi Arabian film industry.",
                        "thumbnail": "https://drive.google.com/uc?id=1m9KblZkNvzcpFvfsAa-xgwxttPxT53LB&export=view",
                        "url": "https://jurdiconsult.media/blogs/theatrical-business-in-saudi-arabia.html"
                    },
                    {
                        "index": "5",
                        "date": "2023-05-27T21:34:29.182Z",
                        "id": "Blogs-5",
                        "title": "Dolphin Emulator: Nintendo Takes on Copyright Infringement",
                        "description": "Discover the controversy surrounding Dolphin Emulator as Nintendo takes action against alleged copyright infringement. Learn about the legal battle that ensued and the impact on emulation and gaming communities. Stay up-to-date with the latest news and developments in this ongoing case.",
                        "thumbnail": "https://drive.google.com/uc?id=1-ZtEBFrMtBcc01Lk9B9RGmvvTyIdMPjU&export=view",
                        "url": "https://jurdiconsult.media/blogs/dolphin-emulator-nintendo-takes-on-copyright-infringement.html"
                    },
                    {
                        "index": "6",
                        "date": "2023-05-27T23:45:21.102Z",
                        "id": "Blogs-6",
                        "title": "Dubai to Host DEF 2023, a Gaming and Esports Extravaganza!",
                        "description": "Get ready for DEF 2023, the ultimate gaming and esports event in Dubai! Join fellow gamers and enthusiasts in an immersive experience filled with competitions, exhibitions, and more. Elevate your gaming skills to the next level and emerge as a champion. Don't miss this gaming extravaganza happening soon!",
                        "thumbnail": "https://drive.google.com/uc?id=1RQkFOGji_VeonDasGRipfxQRccNbFbR7&export=view",
                        "url": "https://jurdiconsult.media/blogs/dubai-to-host-def-2023-a-gaming-and-esports-extravaganza.html"
                    },
                    {
                        "index": "7",
                        "date": "2023-05-28T18:50:45.339Z",
                        "id": "Blogs-7",
                        "title": "Understanding Fair Use: Saudi Example",
                        "description": "Learn about copyright laws in Saudi Arabia and how they relate to Fair Use. This comprehensive guide demystifies Fair Use, giving you everything you need to know to protect your creative works.",
                        "thumbnail": "https://drive.google.com/uc?id=1WNId3RiPB52dJgiqOr-XcivuvLnmvFaJ&export=view",
                        "url": "https://jurdiconsult.media/blogs/understanding-fair-use-saudi-example.html"
                    },
                    {
                        "index": "8",
                        "date": "2023-05-30T06:17:17.616Z",
                        "id": "Blogs-8",
                        "title": "Counting Lebanese Lira: A Guide to Managing Film Production Budgets Amidst Shifting Exchange Rates",
                        "description": "Learn how to effectively manage your film production budget in Lebanon amidst fluctuating exchange rates with 'Counting Lebanese Lira'. This comprehensive guide offers practical tips and tricks for budgeting success, helping you stay on track and achieve your production goals.",
                        "thumbnail": "https://drive.google.com/uc?id=1GEXAqB8TWbDPkz7nT9noB6_ad1tom5_g&export=view",
                        "url": "https://jurdiconsult.media/blogs/counting-lebanese-lira-a-guide-to-managing-film-production-budgets-amidst-shifting-exchange-rates.html"
                    },
                    {
                        "index": "9",
                        "date": "2023-05-31T07:30:35.917Z",
                        "id": "Blogs-9",
                        "title": "How AI is revolutionizing the Video Game Industry",
                        "description": "Discover how artificial intelligence (AI) is transforming the landscape of video games with our comprehensive guide, The Future of Gaming. Explore the latest advancements in AI technology, from innovative gameplay mechanics to more advanced procedural content generation. Learn how industry experts are leveraging AI to create immersive worlds and engage players like never before. Gain insights into the impact of AI on the future of gaming and how it will continue to shape the industry for years to come.",
                        "thumbnail": "https://img.youtube.com/vi/3DGqd8fj4IU/sddefault.jpg",
                        "url": "https://jurdiconsult.media/blogs/how-ai-is-revolutionizing-the-video-game-industry.html"
                    },
                    {
                        "index": "10",
                        "date": "2023-06-06T18:03:27.640Z",
                        "id": "Blogs-10",
                        "title": "Alternative Dispute Resolution: Web-Developers' Angle",
                        "description": "Learn how web developers can effectively handle and resolve conflicts with the help of Alternative Dispute Resolution (ADR) in this informative guide. Discover key techniques, tactics, and strategies to resolve disputes and ensure smooth project delivery from code to resolution. Improve project outcomes, communication, and build stronger client relationships with ADR.",
                        "thumbnail": "https://drive.google.com/uc?id=199sWvW7lYRW1FTB_3gJ6w_2gbD0aqHG1&export=view",
                        "url": "https://jurdiconsult.media/blogs/alternative-dispute-resolution-web-developers-angle.html"
                    },
                    {
                        "index": "11",
                        "date": "2023-06-09T04:14:14.955Z",
                        "id": "Blogs-11",
                        "title": "STEM Education: The Dubai Minecraft Challenge and the Future of Learning",
                        "description": "Revolutionize STEM education with the Dubai Minecraft Challenge and explore the future of learning! Unlock the potential of gamification in the classroom and discover innovative ways to engage students in the STEM disciplines. Join the Minecraft revolution and become a champion of progressive education today.",
                        "thumbnail": "https://drive.google.com/uc?id=1u6ppa9wSbFuQ-hnMp_5m2AoAcKp71uhr&export=view",
                        "url": "https://jurdiconsult.media/blogs/stem-education-the-dubai-minecraft-challenge-and-the-future-of-learning.html"
                    }
                ],
                "services": [
                    {
                        "index": "1",
                        "date": "2023-05-26T03:15:04.971Z",
                        "id": "Services-1",
                        "title": "Gaming Consultancy Services",
                        "description": "Discover how gaming consultancy services can enhance your gaming business strategy and take it to the next level. Learn valuable insights, expert guidance, and successful tactics to stay ahead of the competition and achieve your goals. Elevate your gaming business today with professional gaming consultancy services.",
                        "thumbnail": "https://drive.google.com/uc?id=1SUOdXHZgbqmZEHIho9wESRCowO-p4-i8&export=view",
                        "url": "https://jurdiconsult.media/blogs/gaming-consultancy-services.html"
                    },
                    {
                        "index": "2",
                        "date": "2023-05-26T03:31:14.081Z",
                        "id": "Services-2",
                        "title": "Sensitive and Historical Script Consultancy Services",
                        "description": "Learn about the crucial role of sensitive and historical consultancy services in safeguarding our past. Explore the importance of preserving cultural heritage and discover the benefits of working with professional consultants in this field. Enhance your knowledge and understanding of historical preservation with this informative resource.",
                        "thumbnail": "https://drive.google.com/uc?id=1hmptvyrcKqOBONWfBRlkblZor4I4Aiw3&export=view",
                        "url": "https://jurdiconsult.media/blogs/sensitive-and-historical-script-consultancy-services.html"
                    },
                    {
                        "index": "3",
                        "date": "2023-05-26T03:40:50.838Z",
                        "id": "Services-3",
                        "title": "General Media Consultancy Services",
                        "description": "Looking to improve your content strategy and achieve greater success? Look no further than the Ultimate Guide to Excelling with General Content Consultancy Services. This comprehensive resource provides expert advice and actionable strategies for developing and implementing a winning content marketing plan. From identifying your target audience to creating valuable, engaging content, this guide has everything you need to take your content to the next level and achieve measurable results. Whether you're a seasoned marketer or just getting started, the Ultimate Guide to Excelling with General Content Consultancy Services is the ultimate resource for achieving success with your content.",
                        "thumbnail": "https://drive.google.com/uc?id=1VIOV_2ogrlfNxA3M8LSxfGAl_O9kkdFL&export=view",
                        "url": "https://jurdiconsult.media/blogs/general-media-consultancy-services.html"
                    }
                ]
            }

        }
    },
    methods:{
        generateStars(STAR_COUNT){
            var randomNumber = (min, max) => {
                return Math.floor(Math.random() * (max - min + 1)) + min
            }
            
            // const STAR_COUNT = 50
            let result = ""
            for(let i = 0; i < STAR_COUNT; i++){
                result += `${randomNumber(-50, 50)}vw ${randomNumber(-50, 50)}vh ${randomNumber(0, 3)}px ${randomNumber(0, 3)}px #fff,`
            }
            console.log(result.substring(0, result.length - 1))
        }
    },
    mounted(){
        AOS.init();
    }
})


import swiper from './components/swiper/swiper.js'
app.component('swiper-container', swiper)

import title from './components/title/title.js'
app.component('title-section', title)

import navbar from './components/navbar/navbar.js'
app.component('navbar-section', navbar)

import hero from './components/hero/hero.js'
app.component('hero-section', hero)

import services from './components/services-section/services-section.js'
app.component('services-section', services)

import pot from './components/pot/pot.js'
app.component('pot', pot)

import projects from './components/projects-section/projects-section.js'
app.component('projects-section', projects)

import pagination from './components/pagination/pagination.js'
app.component('pagination', pagination)

import blogMedia from './components/blog-media/blog-media.js'
app.component('blog-media', blogMedia)

import checkAlso from './components/check-also/check-also.js'
app.component('check-also', checkAlso)

import blog from './components/blog/blog.js'
app.component('blog', blog)

import blogsSection from './components/blogs-section/blogs-section.js'
app.component('blogs-section', blogsSection)

import member from './components/member/member.js'
app.component('member', member)

import teamSection from './components/team-section/team-section.js'
app.component('team-section', teamSection)


import contact from './components/contact/contact.js'
app.component('contact-section', contact)

app.mount('#app')