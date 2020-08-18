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

        
        // insert a contact list   
        if (data.contact)
        {
            let ul;
            let left;

            for (let i = 0; i < data.contact.length; i++)
            {
                console.log(data.contact[ i ]);
                if (i === 0)
                {
                    left = $('<div class="contact_left">');
                    ul = $('<ul class="contact_ul">');
                }

                // const li = document.createElement('li');
                // const span = document.createElement('span');
                // li.textContent = data.contact[ i ].item_title;
                // span.textContent = data.contact[ i ].item_content;
                // li.appendChild(span);
                // ul.appendChild(li);
                const title = data.contact[ i ].item_title;

                const str_title = title
                const li = $('<li>', { text: str_title });
                const span = $('<span>', {
                  text: data.contact[i].item_content,
                });
                console.log({ li });
                console.log({ span });


                // console.log(typeof data.contact[i].item_content);
                li.append(span);
                ul.append(li);
            }

            console.log({ ul });

            // console.log(ul)
            left.append(ul);

            $('.contact').append(left);
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