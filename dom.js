const header = document.createElement('header');
const frame1 = document.createElement('div');
frame1.classList.add('frame1');
const userImage = document.createElement('div');
userImage.classList.add('Image');
const username = document.createElement('div');
username.classList.add('name');
const name = document.createTextNode('BAYMAX');
username.append(name);
frame1.append(userImage, username);
const frame2 = document.createElement('div');
frame2.classList.add('frame2');
const frame3 = document.createElement('div');
frame3.classList.add('frame3');
const details = document.createElement('div');
details.classList.add('contactDetails');
const contact = document.createTextNode('no.8, clinton ave, dallas,texas, US. baymax@heroku.com');
contactDetails.append(contact);
const br = document.createElement('br');
const hr = document.createElement('hr');
header.append(frame1,frame2, frame3, details, hr);
document.body.append(header);
