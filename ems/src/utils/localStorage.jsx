const employees=[
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Prepare presentation",
          "taskDescription": "Create slides for the upcoming project review meeting.",
          "taskDate": "2025-01-07",
          "category": "Project Management",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Fix bugs",
          "taskDescription": "Resolve issues reported by QA in the latest build.",
          "taskDate": "2025-01-08",
          "category": "Development",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Customer follow-up",
          "taskDescription": "Reach out to customers for feedback on the new feature.",
          "taskDate": "2025-01-07",
          "category": "Customer Relations",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Prepare training",
          "taskDescription": "Draft a training schedule for new hires.",
          "taskDate": "2025-01-09",
          "category": "HR",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Submit report",
          "taskDescription": "Submit the monthly performance report to the manager.",
          "taskDate": "2025-01-10",
          "category": "Reporting",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Design homepage",
          "taskDescription": "Redesign the homepage layout for the website.",
          "taskDate": "2025-01-06",
          "category": "Design",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Database backup",
          "taskDescription": "Create a backup of the production database.",
          "taskDate": "2025-01-07",
          "category": "IT Support",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Security audit",
          "taskDescription": "Perform a security audit of internal systems.",
          "taskDate": "2025-01-10",
          "category": "Security",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Social media updates",
          "taskDescription": "Post updates on social media channels for marketing.",
          "taskDate": "2025-01-06",
          "category": "Marketing",
          "active": false,
          "newTask": true,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Ad campaign review",
          "taskDescription": "Analyze the performance of the latest ad campaign.",
          "taskDate": "2025-01-09",
          "category": "Marketing",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 6,
      "email": "employee6@example.com",
      "password": "123",
      "tasks": [
        {
          "taskTitle": "Code review",
          "taskDescription": "Review pull requests from the development team.",
          "taskDate": "2025-01-06",
          "category": "Development",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Team feedback",
          "taskDescription": "Collect feedback from team members about the new process.",
          "taskDate": "2025-01-08",
          "category": "Team Management",
          "active": false,
          "newTask": true,
          "completed": true,
          "failed": false
        }
      ]
    }
  ]
  
  const admin=[
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
      }
      
  ]

  export const  setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

  }

  export const  getLocalStorage=()=>{
   const employees=JSON.parse( localStorage.getItem('employees'))
  

    
  }