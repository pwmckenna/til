export default text => text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
