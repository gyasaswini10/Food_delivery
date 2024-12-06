emailjs.send(
    'service_7h8xldq',
    'template_qmafyzq',
    {
      to_email: '2300030244@kluniversity.in', // Replace with your email
      from_name: 'DelightZone',
      reply_to: 'test@example.com',
    },
    'uatl4u2BqUitxqXus'
  )
    .then((result) => {
      console.log('Test email sent successfully:', result.text);
    })
    .catch((error) => {
      console.error('Test email failed:', error);
    });
  