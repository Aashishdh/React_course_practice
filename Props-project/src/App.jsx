import React from 'react'
import Card from './Components/Card'

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta-Logo.png",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      post: "Data Scientist, Product Analytics",
      tags: "Full-time",
      tag2: "Senior level",
      pay: "$450 per day",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      companyName: "Amazon",
      datePosted: "3 days ago",
      post: "Cloud Support Engineer - AWS",
      tags: "Full-time",
      tag2: "Junior level",
      pay: "$180 per day",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      companyName: "Microsoft",
      datePosted: "1 week ago",
      post: "Software Engineer II",
      tags: "Full-time",
      tag2: "Mid level",
      pay: "$320 per day",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      companyName: "Google",
      datePosted: "5 weeks ago",
      post: "Technical Account Manager, Google Cloud",
      tags: "Full-time",
      tag2: "Senior level",
      pay: "$500 per day",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Reliance_Jio_Logo.svg",
      companyName: "Jio Platforms",
      datePosted: "4 days ago",
      post: "Machine Learning Engineer",
      tags: "Full-time",
      tag2: "Junior level",
      pay: "$90 per day",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      companyName: "Netflix",
      datePosted: "3 weeks ago",
      post: "Content Localization Specialist",
      tags: "Part-time",
      tag2: "Mid level",
      pay: "$250 per day",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      companyName: "Apple",
      datePosted: "6 days ago",
      post: "Operations Analyst",
      tags: "Full-time",
      tag2: "Junior level",
      pay: "$160 per day",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
      companyName: "Oracle",
      datePosted: "1 week ago",
      post: "Principal Cloud Consultant",
      tags: "Full-time",
      tag2: "Senior level",
      pay: "$380 per day",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Tata_Consultancy_Services_Logo.svg",
      companyName: "Tata Consultancy Services (TCS)",
      datePosted: "2 days ago",
      post: "Full Stack Developer (Java & React)",
      tags: "Full-time",
      tag2: "Junior level",
      pay: "$75 per day",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
      companyName: "Spotify",
      datePosted: "1 week ago",
      post: "Editor - Music & Culture (Hip-Hop)",
      tags: "Part-time",
      tag2: "Senior level",
      pay: "$280 per day",
      location: "Mumbai, India"
    }
  ];

  return (
    <div className='parent'>
      {jobOpenings.map((elem, idx) => (
        <div key={idx}>
          <Card 
            company={elem.companyName} 
            post={elem.post} 
            datePosted={elem.datePosted} 
            brandLogo={elem.brandLogo} 
            tags={elem.tags} 
            tag2={elem.tag2} 
            pay={elem.pay} 
            location={elem.location} 
          />
        </div>
      ))}
    </div>
  )
}

export default App

{/* {arr.map(function(elem){
        return <h1>{elem*2}</h1>
      })} */}
      {/* {arr.map(function(){
          return <Card />
      })} */}
      {/* <Card /> */}

   // const arr=[10,20,30]

  // const arr=[
  //   {
  //     user:"Aashish dhungana",
  //     age:21
  //   },

  //   {
  //     user:"Hari Khadka",
  //     age:34
  //   }
  // ]

  // arr.map(function(elem){
  //   console.log(elem.user);

  // })