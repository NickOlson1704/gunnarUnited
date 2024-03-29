document.addEventListener("DOMContentLoaded", function() {
    var questionForm = document.getElementById("questionForm");
    var notification = document.getElementById("notification");
  
    questionForm.addEventListener("submit", function(event) {
      event.preventDefault(); 
  
      
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var question = document.getElementById("question").value;
  
      
      if (name.trim() === "" || email.trim() === "" || question.trim() === "") {
        displayNotification("Please fill out all fields.", "error");
        return;
      }
  
      
      setTimeout(function() {
        displayNotification("Question submitted successfully!", "success");
        questionForm.reset(); 
      }, 1000);
    });
  
    function displayNotification(message, type) {
      notification.innerHTML = message;
      notification.classList.add(type);
  
      
      setTimeout(function() {
        notification.innerHTML = "";
        notification.classList.remove(type);
      }, 3000);
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    var contactForm = document.getElementById("contactForm");
    var notification = document.getElementById("notification");
  
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault(); 
  
      
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var message = document.getElementById("message").value;
  
      
      if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        displayNotification("Please fill out all fields.", "error");
        return;
      }
  
      
      setTimeout(function() {
        displayNotification("Message submitted successfully!", "success");
        contactForm.reset(); 
      }, 1000);
    });
  
    function displayNotification(message, type) {
      notification.innerHTML = message;
      notification.classList.add(type);
  
      
      setTimeout(function() {
        notification.innerHTML = "";
        notification.classList.remove(type);
      }, 3000);
    }
  }); 
  
  document.addEventListener("DOMContentLoaded", function() {
    var upcomingList = document.getElementById("upcomingList");
    var pastList = document.getElementById("pastList");
    var campaignList = document.getElementById("campaignList");
  
    
    var activitiesData = {
      upcoming: [
        {
          title: "Summer Camp 2023",
          date: "June 15 - June 30",
          location: "Gunnar United Center",
          description: "Join us for a fun-filled summer camp for kids of all ages. Activities include sports, arts and crafts, and outdoor adventures.",
          signUpLink: "https://example.com/signup"
        },
        {
          title: "Science Fair",
          date: "July 10",
          location: "Gunnar United School",
          description: "Calling all young scientists! Showcase your science projects and win exciting prizes.",
          signUpLink: "https://example.com/signup"
        }
      ],
      past: [
        {
          title: "Family Fun Day",
          date: "May 20",
          location: "Gunnar United Park",
          description: "A day of fun activities for the whole family, including games, food stalls, and live entertainment.",
          photosLink: "https://example.com/photos"
        },
        {
          title: "Parenting Workshop",
          date: "April 25",
          location: "Gunnar United Community Center",
          description: "Learn effective parenting techniques and strategies from our expert guest speakers.",
          photosLink: "https://example.com/photos"
        }
      ],
      campaigns: [
        {
          title: "Reading Challenge",
          date: "Ongoing",
          description: "Encourage your child's reading habit by participating in our reading challenge. Earn rewards for completing reading goals.",
          learnMoreLink: "https://example.com/reading-challenge"
        }
      ]
    };
  
    
    activitiesData.upcoming.forEach(function(activity) {
      var li = document.createElement("li");
      var link = document.createElement("a");
      link.href = activity.signUpLink;
      link.textContent = activity.title;
      li.appendChild(link);
      li.innerHTML += " - " + activity.date + ", " + activity.location + "<br>";
      li.innerHTML += activity.description;
      upcomingList.appendChild(li);
    });
  
    
    activitiesData.past.forEach(function(activity) {
      var li = document.createElement("li");
      var link = document.createElement("a");
      link.href = activity.photosLink;
      link.textContent = activity.title;
      li.appendChild(link);
      li.innerHTML += " - " + activity.date + ", " + activity.location + "<br>";
      li.innerHTML += activity.description;
      pastList.appendChild(li);
    });
  
    
    activitiesData.campaigns.forEach(function(campaign) {
      var li = document.createElement("li");
      var link = document.createElement("a");
      link.href = campaign.learnMoreLink;
      link.textContent = campaign.title;
      li.appendChild(link);
      li.innerHTML += " - " + campaign.date + "<br>";
      li.innerHTML += campaign.description;
      campaignList.appendChild(li);
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var upcomingList = document.getElementById("upcomingList");
    var activityForm = document.getElementById("activityForm");
  
    
    var activitiesData = {
      upcoming: [],
      past: [],
      campaigns: []
    };
  
    
    function addActivity(event) {
      event.preventDefault();
  
      
      var title = document.getElementById("title").value;
      var date = document.getElementById("date").value;
      var location = document.getElementById("location").value;
      var description = document.getElementById("description").value;
  
      
      var newActivity = {
        title: title,
        date: date,
        location: location,
        description: description
      };
  
      
      activitiesData.upcoming.push(newActivity);
  
      
      activityForm.reset();
  
      
      displayActivities();
    }
  
    
    function deleteActivity(index) {
      activitiesData.upcoming.splice(index, 1); 
  
      
      displayActivities();
    }
  
    
    function displayActivities() {
     
      upcomingList.innerHTML = "";
  
      
      activitiesData.upcoming.forEach(function(activity, index) {
        var li = document.createElement("li");
        li.innerHTML = "<strong>" + activity.title + "</strong> - " + activity.date + ", " + activity.location + "<br>" + activity.description;
  
        
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
          deleteActivity(index);
        });
  
        
        li.appendChild(deleteButton);
  
        upcomingList.appendChild(li);
      });
    }
  
    
    activityForm.addEventListener("submit", addActivity);
  
  
    displayActivities();
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    var missionText = document.getElementById("missionText");
    var historyText = document.getElementById("historyText");
  
    
    var aboutData = {
      mission: "Our mission is to empower parents and caregivers with knowledge and resources to promote healthy child development.",
      history: "Gunnar United was founded in 2005 with the goal of creating a supportive community for parents and children. Over the years, we have organized various activities and campaigns to promote education, well-being, and the overall growth of children."
    };
  
    
    missionText.textContent = aboutData.mission;
  
    
    historyText.textContent = aboutData.history;
  });  

  