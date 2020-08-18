function displayTitle (data)
{
  //insert a title
  if (data.title) {
    $('#title').append(data.title);
  } else
  {
      return;
  }
}

function displayContactSection (data)
{
    if (data.contact) {
      const left = $('<div>', { class: 'contact_left' });
      const left_ul = $('<ul>', { class: 'contact_ul' });

      const right = $('<div>', { class: 'contact_right' });
      const right_ul = $('<ul>', { class: 'contact_ul' });

      for (let i = 0; i < data.contact.length; i++) {
        const title = data.contact[i].item_title;
        const content = data.contact[i].item_content;

        const li = $('<li>', { text: title + ' - ' });
        const span = $('<span>');
        const a = $('<a>', {
          text: content,
          href: content,
          target: '_blank',
        });

        span.append(a);
        li.append(span);

        if (i < 3) {
          left_ul.append(li);
        } else {
          right_ul.append(li);
        }
      }

      left.append(left_ul);
      right.append(right_ul);

      $('.contact').append(left, right);
    } else
    {
        return;
    }
}

function displaySummarySection (data)
{
    if (data.summary) {
      const title = data.summary.title;
      const content = data.summary.content;
      const h2 = $('<h2>', { text: title });
      const p = $('<p>', { text: content });
      $('.summary').append(h2, p);
    } else
    {
        return;
    }
}

function displayWorkExperienceSection (data)
{
    if (data.work_experience) {
      const title = data.work_experience.title;
      const h2 = $('<h2>', { text: title });
      $('.work_experience').append(h2);

      const careers = data.work_experience.career;

      for (let i = 0; i < careers.length; i++) {
        const div = $('<div>', { class: 'career' });

        if (careers[i].title) {
          const job_title = careers[i].title;
          const h3 = $('<h3>', { text: job_title });
          div.append(h3);
        }
        if (careers[i].company_description) {
          const company_description = careers[i].company_description;
          const h4 = $('<h4>', { text: company_description });
          div.append(h4);
        }

        if (careers[i].achievements) {
          const ul = $('<ul>', { class: 'career_ul' });
          const achievements = careers[i].achievements;

          for (let j = 0; j < achievements.length; j++) {
            const achievement = achievements[j];
            const li = $('<li>', { text: achievement });
            ul.append(li);
          }
          div.append(ul);
        }

        $('.work_experience').append(div);
      }
    } else
    {
        return;
    }
}

function displayProjectsSection (data)
{
    if (data.projects) {
      if (data.projects.title) {
        const title = data.projects.title;
        const h2 = $('<h2>', { text: title });
        $('.projects').append(h2);
      }

      if (data.projects.project_list) {
        const project_list = data.projects.project_list;
        for (let i = 0; i < project_list.length; i++) {
          const project = $('<div>', { class: 'project' });
          const project_name = project_list[i].project_name;
          const project_url = project_list[i].project_url;
          const description = project_list[i].description;

          const h3 = $('<h3>', { text: project_name });

          const span = $('<span>');
          const a = $('<a>', {
            text: ' ' + project_url,
            href: project_url,
            target: '_blank',
          });

          const p = $('<p>', { text: description });

          span.append(a);
          h3.append(span);
          project.append(h3, p);
          $('.projects').append(project);
        }
      }
    } else
    {
        return;
    }
}


function displayEducationSection (data)
{
    if (data.education) {
      const title = data.education.title;
      const h2 = $('<h2>', { text: title });
      $('.education').append(h2);

      const educational_background = data.education.educational_background;

      for (let i = 0; i < educational_background.length; i++) {
        const major = educational_background[i].major;
        const description = ' ' + educational_background[i].description;
        const h3 = $('<h3>');
        const span = $('<span>', { text: major });
        h3.append(span, description);
        $('.education').append(h3);
      }
    } else
    {
        return;
    }
}
$(document).ready(function ()
{
    $.getJSON('../resume.json', function (data)
    {

      //insert a title
    //   if (data.title) {
    //     $('#title').append(data.title);
    //   }
        displayTitle(data);

      // insert a contact section
        displayContactSection(data);
    //   if (data.contact) {
    //     const left = $('<div>', { class: 'contact_left' });
    //     const left_ul = $('<ul>', { class: 'contact_ul' });

    //     const right = $('<div>', { class: 'contact_right' });
    //     const right_ul = $('<ul>', { class: 'contact_ul' });

    //     for (let i = 0; i < data.contact.length; i++) {
    //       const title = data.contact[i].item_title;
    //       const content = data.contact[ i ].item_content;

    //       const li = $('<li>', { text: title + " - " });
    //       const span = $('<span>');
    //         const a = $('<a>', {
    //           text: content,
    //           href: content,
    //           target: '_blank',
    //         });
            
            
    //       span.append(a);
    //       li.append(span);

    //       if (i < 3) {
    //         left_ul.append(li);
    //       } else {
    //         right_ul.append(li);
    //       }
    //     }

    //     left.append(left_ul);
    //     right.append(right_ul);

    //     $('.contact').append(left, right);
    //   }

      //insert a summary section
        displaySummarySection(data);
    //   if (data.summary) {
    //     const title = data.summary.title;
    //     const content = data.summary.content;
    //     const h2 = $('<h2>', { text: title });
    //     const p = $('<p>', { text: content });
    //     $('.summary').append(h2, p);
    //   }

      //insert a work experience section
        displayWorkExperienceSection (data);
    //   if (data.work_experience) {
    //     const title = data.work_experience.title;
    //     const h2 = $('<h2>', { text: title });
    //     $('.work_experience').append(h2);

    //     const careers = data.work_experience.career;

    //     for (let i = 0; i < careers.length; i++) {
    //       const div = $('<div>', { class: 'career' });

    //       if (careers[i].title) {
    //         const job_title = careers[i].title;
    //         const h3 = $('<h3>', { text: job_title });
    //         div.append(h3);
    //       }
    //       if (careers[i].company_description) {
    //         const company_description = careers[i].company_description;
    //         const h4 = $('<h4>', { text: company_description });
    //         div.append(h4);
    //       }

    //       if (careers[i].achievements) {
    //         const ul = $('<ul>', { class: 'career_ul' });
    //         const achievements = careers[i].achievements;

    //         for (let j = 0; j < achievements.length; j++) {
    //           const achievement = achievements[j];
    //           const li = $('<li>', { text: achievement });
    //           ul.append(li);
    //         }
    //         div.append(ul);
    //       }

    //       $('.work_experience').append(div);
    //     }
    //   }

      //insert a projects section
        displayProjectsSection(data);
    //   if (data.projects) {
    //     if (data.projects.title) {
    //       const title = data.projects.title;
    //       const h2 = $('<h2>', { text: title });
    //       $('.projects').append(h2);
    //     }

    //     if (data.projects.project_list) {
    //       const project_list = data.projects.project_list;
    //       for (let i = 0; i < project_list.length; i++) {
    //         const project = $('<div>', { class: 'project' });
    //         const project_name = project_list[i].project_name;
    //         const project_url = project_list[i].project_url;
    //         const description = project_list[i].description;

    //         const h3 = $('<h3>', { text: project_name });

    //         const span = $('<span>');
    //         const a = $('<a>', {
    //           text: ' ' + project_url,
    //           href: project_url,
    //           target: '_blank',
    //         });

    //         const p = $('<p>', { text: description });

    //         span.append(a);
    //         h3.append(span);
    //         project.append(h3, p);
    //         $('.projects').append(project);
    //       }
    //     }
    //   }

      //insert an education section
        displayEducationSection(data);
    //   if (data.education){
    //       const title = data.education.title;
    //       const h2 = $('<h2>', { text: title });
    //       $('.education').append(h2);

    //       const educational_background = data.education.educational_background;
          
    //       for (let i = 0; i < educational_background.length; i++)
    //       {
    //           const major = educational_background[ i ].major;
    //           const description = " " + educational_background[ i ].description;
    //           const h3 = $('<h3>');
    //           const span = $('<span>', { text: major });
    //           h3.append(span, description);
    //           $('.education').append(h3);
    //       }
    //   }
    });
});