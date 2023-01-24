const dateTimeDiv = document.getElementById('DateTime');
const date = new Date();
const dateString = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
const timeString = date.toLocaleTimeString('en-US', {
  hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true,
});
const dateTime = `${dateString} , ${timeString}`;
dateTimeDiv.innerHTML = dateTime;
