import React from "react";
import CardPart2 from "./CardPart2";

const Card = () => {
  // part5: Props drilling in react
  // const user = "Kartik";

  //   JSON data of 5 users
  const users = [
    {
      name: "Anand Kumar",
      city: "Delhi",
      age: 24,
      profession: "Full Stack Developer",
      profilePhoto: "https://avatars.githubusercontent.com/u/130299086?v=4",
    },
    {
      name: "Priya Sharma",
      city: "Mumbai",
      age: 22,
      profession: "UI/UX Designer",
      profilePhoto: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    {
      name: "Ravi Mehta",
      city: "Bangalore",
      age: 27,
      profession: "Data Scientist",
      profilePhoto: "https://randomuser.me/api/portraits/men/31.jpg",
    },
    {
      name: "Sneha Verma",
      city: "Hyderabad",
      age: 25,
      profession: "Mobile App Developer",
      profilePhoto: "https://randomuser.me/api/portraits/women/41.jpg",
    },
    {
      name: "Arjun Patel",
      city: "Ahmedabad",
      age: 23,
      profession: "DevOps Engineer",
      profilePhoto: "https://randomuser.me/api/portraits/men/51.jpg",
    },
  ];
  return (
    <>
      {/* Props drilling in react
      user = lagakr esliye paas kiya qki ye ek properties(props) hai
       */}
      {/* <Card name={user} /> */}

      {/* Direct value v paas kr skte hai like below */}
      {/* <Card name="Kartik Aryan" /> */}

      {/* It can be reused again with different value */}
      {/* <Card name="Anand Kumar" /> */}

      <h1 className="text-2xl font-bold m-4">
        Part5: This is Card Section(props drilling)
      </h1>
      <div className="flex flex-row gap-6 justify-center flex-wrap">
        {/* <CardPart2 name="Anand" age="25" city="Gorakhpur" /> */}

        {users.map(function (elem, idx) {
          return (
            <CardPart2
              key={idx}
              name={elem.name}
              age={elem.age}
              city={elem.city}
              photo={elem.profilePhoto}
              profession={elem.profession}
            />
          );
        })}
      </div>
    </>
  );
};

export default Card;
