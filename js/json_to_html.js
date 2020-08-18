$(document).ready(function () {
    $.getJSON('../resume.json', function (data)
    {
        console.log(data);
        console.log(data.contact);

          //insert a title
        if (data.title)
        {
            $('#title').append(data.title);    
        }

        
        // insert a contact section   
        if (data.contact)
        {
            const left = $('<div>', { class: 'contact_left' });
            const left_ul = $('<ul>', { class: 'contact_ul' });
            
            const right = $('<div>', { class: 'contact_right' });
            const right_ul = $('<ul>', { class: 'contact_ul' });

            for (let i = 0; i < data.contact.length; i++)
            {
                const title = data.contact[i].item_title;
                const content = data.contact[i].item_content;

                const li = $('<li>', { text: title });
                const span = $('<span>', {
                  text: ' - ' + content,
                });
                li.append(span);

                if (i < 3)
                {
                    left_ul.append(li);
                } else
                {
                    right_ul.append(li);
                }
                
            }

            left.append(left_ul);
            right.append(right_ul)

            $('.contact').append(left, right);
        }


        //insert a summary section
        if (data.summary)
        {
            const title = data.summary.title;
            const content = data.summary.content;
            const h2 = $('<h2>', { text: title });
            const p = $('<p>', { text: content })
            $('.summary').append(h2, p);
        }

        //insert a work experience section
        if (data.work_experience)
        {

            const title = data.work_experience.title;
            const h2 = $('<h2>', { text: title });
            $('.work_experience').append(h2);

            const careers = data.work_experience.career;

            for (let i = 0; i < careers.length; i++)
            {
                const div = $('<div>', { class: 'career' });
                
                if (careers[i].title)
                {
                    const job_title = careers[ i ].title;
                    const h3 = $('<h3>', { text: job_title });
                    div.append(h3);
                }
                if (careers[ i ].company_description)
                {
                    const company_description = careers[ i ].company_description;
                    const h4 = $('<h4>', { text: company_description });
                    div.append(h4);
                }
                
                if (careers[ i ].achievements)
                {
                    const ul = $('<ul>', {class: 'career_ul'});
                    const achievements = careers[ i ].achievements;
                    
                    for (let j = 0; j < achievements.length; j++)
                    {
                        const achievement = achievements[ j ];
                        const li = $('<li>', { text: achievement })
                        ul.append(li)
                    }
                    div.append(ul);
                }

                $('.work_experience').append(div);
                
            }

        }
      
      // for (var i in data) {
      //   $('#output').append('<li><strong>' + data[i].division + '</strong></li>');
      //   for (var j in data[i].person) {
      //     $('#output').append(
      //       '<li>' +
      //         data[i].person[j].name +
      //         '（' +
      //         data[i].person[j].age +
      //         '才）</li>n'
      //     );
      //   }
      // }
    });
});