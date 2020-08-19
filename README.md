# Convert a resume jSON file into HTML code

## :book: How to use

This is an application that convert a resume file into HTML code.
Once you put a jSON file in the root, the `js/json_to_html.js`convert it into HTML code.
You can see the resume on browsers and print it as well.

## :warning: Note

You need to convert your resume into a jSON file in advance. 
Then, name the file 'resume.json' and put it in the root.

Here is an exapmle of the structure of a jSON file.

```
{
    "title": "MARIE OTAKI / Software Developer",

    "contact": [
        {
            "item_title": "Portfolio",
            "item_content": "https://marieotaki.com/"
        },
        {
            "item_title": "GitHub",
            "item_content": "https://github.com/marieooq"
        },
        {
            "item_title": "LinkedIn",
            "item_content": "https://www.linkedin.com/in/marieotaki/"
        },
        {
            "item_title": "Email",
            "item_content": "otakimarie@gmail.com"
        },
        {
            "item_title": "Phone",
            "item_content": "(236) 512-4416"
        },
        {
            "item_title": "Address ",
            "item_content": "Vancouver, BC"
        }
    ],

    "summary": {
        "title" : "SUMMARY",
        "content" : "Front-end developer who is passionate about building web applications in JavaScript (including React) and also hands-on User Experience (UX) design. Has gained over three years of experience optimizing UI performance for web and mobile. Skilled in JavaScript, React, Redux,  jQuery, TypeScript, Node.js,  HTML5, CSS3, SaSS, Mongodb, MySQL"
    },

    "work_experience": {
        "title": "WORK EXPERIENCE",
        "career": [
            {
                "title": "Frontend Developer(Contract) | COS Educational Consulting Inc. | May 2020  - Present  | Vancouver, BC",
                "company_description": "COS Educational Consulting Inc.is a study abroad agency. It offers recruiting / immigration services to local partners",
                "achievements": ["Revised the website to help website upgrade usability with WordPress, HTML, CSS, and JavaScript."]
            },
            {
                "title": "Web Designer | Xing Corporation | March 2018  - March 2019  | Tokyo, Japan",
                "company_description": "Xing Corporation is the second-largest company provides karaoke machine and software related to karaoke.",
                "achievements": ["Maintain the content on its corporate website using HTML, CSS, and JavaScript.",
                    "Created banners using Adobe Photoshop and Illustrator."
                ]
            },
            {
                "title": "Web Designer | Self-Employed | May 2016  - July 2017 | Tokyo, Japan",
                "achievements": [
                    "Built a website from scratch using HTML5, CSS3, and JavaScript.",
                    "Designed business cards using Adobe Illustrator and Photoshop."
                ]
            },
            {
                "title": "Executive Assistant | Yahoo Japan Corporation | August 2017  - February 2018 | Tokyo, Japan"
            },
            {
                "title": "Sales Lead | Retty Inc.| May 2015  - April 2016 | Tokyo, Japan"
            },
            {
                "title": "System Administrator | NTT DATA Getronics Corporation | April 2014  - May 2015 | Tokyo, Japan"
            }   
        ]
    },
    "projects" : {
        "title": "PROJECTS",
        "project_list" :[
        {
            "project_name": "Msgif",
            "project_url": "https://msgif.net/",
            "description": "A GIF generator that converts messages into GIF. It got 315 upvotes on Product Hunt. (as of February 29th, 2020)   React  / Redux" 
        },
        {
            "project_name": "Stock Price List",
            "project_url": "https://github.com/marieooq/stock-price-list",
            "description": "A SPA application that enables to display the stock price.   React / TypeScript / Ant Design"
        },
        {
            "project_name": "CRUD Application",
            "project_url": "https://github.com/marieooq/final-node-blog",
            "description": "A CRUD blog application that enables users to create, read, update, and delete the post of the blog. React / Node.js / MongoDB"
        }
    ]},
    "education" : {
        "title": "EDUCATION",
        "educational_background" :[
        {
            "major" : "Web and Mobile App Development Diploma",
            "description" : "| Cornerstone International Community College of Canada | 2019  - 2020 | Vancouver, BC"
        },
        {
            "major": "Bachelor of Arts",
            "description": "| Kyoto Women’s University | 2010  - 2014 | Kyoto, Japan"
        }
    ]}
}
```


## :computer: Stack

- HTML
- CSS
- JavaScript
- jQuery

## :thumbsup: What I worked on

- Used CSS custom properties <br>
  I used CSS custom properties instead of other CSS libraries, to make it easy to modify the style even later.

- Adjusted the size of the page <br>
  I adjusted the size of the page so that you can print the resume.
