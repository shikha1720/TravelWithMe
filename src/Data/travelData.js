const travelDB = {
    France: [
      {
        name: "Paris",
        country: "France",
        population: "21.6 lakhs",
        size: "105.4 km²",
        poster: "https://i.postimg.cc/ncZcWRF1/paris.jpg",
        fact:
          "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Known as the “City of Light” or the “City of Love,” the streets of Paris overflow with culture, art, beauty, and history."
      },
      {
        name: "Nice",
        country: "France",
        population: "3.43 lakhs",
        size: "71.92 km²",
        poster: "https://i.postimg.cc/vHzHwrDw/nice.jpg",
        fact:
          "The city is nicknamed Nice la Belle (Nissa La Bella in Niçard), which means Nice the Beautiful, which is also the title of the unofficial anthem of Nice, written by Menica Rondelly in 1912."
      },
      {
        name: "Bordeaux",
        country: "France",
        population: "2.5 lakhs",
        size: "49.36 km²",
        poster: "https://i.postimg.cc/8zzkp7rJ/bordeaux.jpg",
        fact:
          "Bordeaux, hub of the famed wine-growing region, is a port city on the Garonne River in southwestern France. It’s known for its Gothic"
      },
      {
        name: "Marseille",
        country: "France",
        population: "8.62 lakhs",
        size: "240.6 km²",
        poster: "https://i.postimg.cc/762YFjJK/marseille.jpg",
        fact:
          "Marseille, a port city in southern France, has been a crossroads of immigration and trade since its founding by the Greeks circa 600 B.C. At its heart is the Vieux-Port (Old Port), where fishmongers sell their catch along the boat-lined quay. "
      },
      {
        name: "Strasbourg",
        country: "France",
        population: "2.77 lakhs ",
        size: "78.26 km²",
        poster: "https://i.postimg.cc/3NQJY9gY/strasbourg.jpg",
        fact:
          "Strasbourg is the capital city of the Grand Est region, formerly Alsace, in northeastern France. It's also the formal seat of the European Parliament and sits near the German border, with culture and architecture blending German and French influences."
      }
    ],
    Spain: [
      {
        name: "Madrid",
        country: "Spain",
        population: "32.2 lakhs",
        size: "604.3 km²",
        poster: "https://i.postimg.cc/Z5bnWfXq/madrid.jpg",
        fact:
          "Madrid, Spain's central capital, is a city of elegant boulevards and expansive, manicured parks such as the Buen Retiro. It’s renowned for its rich repositories of European art, including the Prado Museum’s works by Goya, Velázquez and other Spanish masters."
      },
      {
        name: "Barcelona",
        country: "Spain",
        population: "16.2 lakhs",
        size: "101.9 km²",
        poster: "https://i.postimg.cc/Hk6xXwC9/barcelona.jpg",
        fact:
          "Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is known for its art and architecture. The fantastical Sagrada Família church and other modernist landmarks designed by Antoni Gaudí dot the city. "
      },
      {
        name: "Seville",
        country: "Spain",
        population: "6.89 lakhs",
        size: "140.8 km²",
        poster: "https://i.postimg.cc/PrzNrG3c/Seville.jpg",
        fact:
          "Seville is the capital of southern Spain’s Andalusia region. It's famous for flamenco dancing, particularly in its Triana neighborhood. Major landmarks include the ornate Alcázar castle complex, built during the Moorish Almohad dynasty, and the 18th-century Plaza de Toros de la Maestranza bullring. "
      },
      {
        name: "Valencia",
        country: "Spain",
        population: " 7.91 lakhs",
        size: "134.6 km²",
        poster: "https://i.postimg.cc/0QTrr9qg/valencia.jpg",
        fact:
          "The port city of Valencia lies on Spain’s southeastern coast, where the Turia River meets the Mediterranean Sea. It’s known for its City of Arts and Sciences, with futuristic structures including a planetarium, an oceanarium and an interactive museum. "
      },
      {
        name: "Granada",
        country: "Spain",
        population: "2.32 lakhs",
        size: "88.02 km²",
        poster: "https://i.postimg.cc/L4Pnwgzm/Granada.jpg",
        fact:
          "Granada is a city in southern Spain’s Andalusia region, in the foothills of the Sierra Nevada mountains. It's known for grand examples of medieval architecture dating to the Moorish occupation, especially the Alhambra. "
      }
    ],
    India: [
      {
        name: "Mumbai",
        country: "India",
        population: "1.84 crores",
        size: "603.4 km²",
        poster: "https://i.postimg.cc/VLcd8sRn/mumbai.jpg",
        fact:
          "Mumbai (formerly called Bombay) is a densely populated city on India’s west coast. A financial center, it's India's largest city. On the Mumbai Harbour waterfront stands the iconic Gateway of India stone arch, built by the British Raj in 1924. "
      },
      {
        name: "Delhi",
        country: "India",
        population: "1.9 crores",
        size: "1,484 km²",
        poster: "https://i.postimg.cc/0j7jwh8z/delhi.jpg",
        fact:
          "Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people. "
      },
      {
        name: "Bengaluru",
        country: "India",
        population: "84.3 lakhs",
        size: "709 km²",
        poster: "https://i.postimg.cc/2535w1kR/bengluru.jpg",
        fact:
          "Bengaluru (also called Bangalore) is the capital of India's southern Karnataka state. The center of India's high-tech industry, the city is also known for its parks and nightlife.Bangalore is nicknamed the 'Garden City' for its gardens and parks and was once called a Pensioner's Paradise. "
      },
      {
        name: "Hyderabad",
        country: "India",
        population: "68.1 lakhs",
        size: "625 km²",
        poster: "https://i.postimg.cc/W4fdLMW1/hyderabad.jpg",
        fact:
          "Hyderabad is the capital of southern India's Telangana state. A major center for the technology industry, it's home to many upscale restaurants and shops. Its historic sites include Golconda Fort, a former diamond-trading center that was once the Qutb Shahi dynastic capital. "
      },
      {
        name: "Kolkata",
        country: "India",
        population: "1.49 crores",
        size: "206.1 km²",
        poster: "https://i.postimg.cc/bNKSdHpD/Kolkata.jpg",
        fact:
          "Kolkata (formerly Calcutta) is the capital of India's West Bengal state. Founded as an East India Company trading post, it was India's capital under the British Raj from 1773–1911. Today it’s known for its grand colonial architecture, art galleries and cultural festivals."
      }
    ],
    Italy: [
      {
        name: "Rome",
        country: "Italy",
        population: "28.7 lakhs",
        size: "1,285 km²",
        poster: "https://i.postimg.cc/k4G6Hj74/rome.jpg",
        fact:
          "Rome is the capital city and a special comune of Italy, as well as the capital of the Lazio region. The city has been a major human settlement for almost three millennia. With 2,860,009 residents in 1,285 km², it is also the country's most populated comune."
      },
      {
        name: "Venice",
        country: "Italy",
        population: "2.62 lakhs",
        size: "414.6 km²",
        poster: "https://i.postimg.cc/xTzHYFMN/venice.jpg",
        fact:
          "Venice, the capital of northern Italy’s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals – including the Grand Canal thoroughfare – lined with Renaissance and Gothic palaces."
      },
      {
        name: "Florence",
        country: "Italy",
        population: "3.82 lakhs",
        size: "102.4 km²",
        poster: "https://i.postimg.cc/7LmJmv8d/Florence.jpg",
        fact:
          "Florence, capital of Italy’s Tuscany region, is home to many masterpieces of Renaissance art and architecture. One of its most iconic sights is the Duomo, a cathedral with a terracotta-tiled dome engineered by Brunelleschi and a bell tower by Giotto. "
      },
      {
        name: "Naples",
        country: "Italy",
        population: "30.8 lakhs",
        size: "119 km²",
        poster: "https://i.postimg.cc/qvHK7Xxb/Naples.jpg",
        fact:
          "Naples, a city in southern Italy, sits on the Bay of Naples. Nearby is Mount Vesuvius, the still-active volcano that destroyed nearby Roman town Pompeii. Dating to the 2nd millennium B.C., Naples has centuries of important art and architecture. "
      },
      {
        name: "Milan",
        country: "Italy",
        population: "13.5 lakhs",
        size: "181.8 km²",
        poster: "https://i.postimg.cc/P5bwvp6t/Milan.jpg",
        fact:
          "Milan, a metropolis in Italy's northern Lombardy region, is a global capital of fashion and design. Home to the national stock exchange, it’s a financial hub also known for its high-end restaurants and shops. "
      }
    ],
    Turkey: [
      {
        name: "İstanbul",
        country: "Turkey",
        population: "1.55 crores",
        size: "5,343 km²",
        poster: "https://i.postimg.cc/Zn9NWwQg/stanbul.jpg",
        fact:
          "Istanbul is a major city in Turkey that straddles Europe and Asia across the Bosphorus Strait. Its Old City reflects cultural influences of the many empires that once ruled here. "
      },
      {
        name: "Pamukkale",
        country: "Turkey",
        population: "	346,625",
        size: "1,077 ha",
        poster: "https://i.postimg.cc/zDMWs1b1/pamukkale.jpg",
        fact:
          "Pamukkale is a town in western Turkey known for the mineral-rich thermal waters flowing down white travertine terraces on a nearby hillside. It neighbors Hierapolis, an ancient Roman spa city founded around 190 B.C. "
      },
      {
        name: "Cappadocia",
        country: "Turkey",
        population: "310.000",
        size: "5.467 km²",
        poster: "https://i.postimg.cc/cCVnwQyJ/Cappadocia.jpg",
        fact:
          "Cappadocia, a semi-arid region in central Turkey, is known for its distinctive “fairy chimneys,” tall, cone-shaped rock formations clustered in Monks Valley, Göreme and elsewhere. Other notables sites include Bronze Age homes carved into valley walls by troglodytes (cave dwellers)."
      },
      {
        name: "Antalya",
        country: "Turkey",
        population: "24.3 lakhs",
        size: "1,417 km²",
        poster: "https://i.postimg.cc/fMdjhkfq/Antalya.jpg",
        fact:
          "Antalya is a Turkish resort city with a yacht-filled Old Harbor and beaches flanked by large hotels. It's a gateway to Turkey's southern Mediterranean region, known as the Turquoise Coast for its blue waters. "
      },
      {
        name: "Ankara",
        country: "Turkey",
        population: "57 lakhs",
        size: "24,521 km²",
        poster: "https://i.postimg.cc/NMCTG3dm/Ankara.jpg",
        fact:
          "Ankara, Turkey’s cosmopolitan capital, sits in the country’s central Anatolia region. It’s a center for the performing arts, home to the State Opera and Ballet, the Presidential Symphony Orchestra and several national theater companies."
      }
    ]
  };
  export const BgImage = {
    poster1:'https://images.rawpixel.com/image_png_social_landscape/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtNTQ2LWJhMTljXzEucG5n.png',
    poster2:'https://travelbuddy01.netlify.app/images/hero.svg',
  }
  export default travelDB;