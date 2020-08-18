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

            $('.contact').append(left);
            $('.contact').append(right);
        }


        //insert a summary section
        if (data.summary)
        {
          console.log(data.summary.content);
            const title = data.summary.title;
            const content = data.summary.content;
            const h2 = $('<h2>', { text: title });
            const p = $('<p>', { text: content })
            $('.summary').append(h2);
            $('.summary').append(p);
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