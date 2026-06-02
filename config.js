const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VUXbOiOBT8L3nVGj4UFKtu1QIqggoqguLWPgQIGEU+QlBgyv++hXfu3HnYnb3LU0hSffr06c53kGa4REvUgMl3kBN8hxR1S9rkCEyAUkURIqAPQkghmIDrQhPV2oXymWeKpoVm3KrlaruTBt70HO23F+uOXIsrLd55A88+yCs/wcFvAPl2tVq6hM7wfFSMbz1ZKIzxIzIStD7VQhxA5eSrm4Wa2dkbeHaIEBOcxrP8jG6IwGSJmg3E5Gv0e2qvNX11Px1V/FA7p0OObJ3zrLUixlUrQS3ch1cjfx65X6TP3R8NPy24Qeu1quPs15J3W2UXTi5Ieo+X9Hwo1HNhcQpfvtMvcZyiUA9RSjFtvqx7YxZWvu0JnoqbrZK1o8IjpwESeyPtzPS0Xm6gVHqwlZZ8kbhXT5fCPT0udOnhrw2rrR/+pUWZY/kzXb1I6+t8o9ttG8f6r8Q35MMr1/+juzVnDGtjubByzteBIV4M8+CR2BIGC0Hosb5PBVMiyYyk+tfoR5XoENNYJst6eJQcx3XEB3QPzDSazk7JMIoD04sH8yndsZ/0Ia3I71ieNxIeDe5KtOnxft7QUr9uylEdKOqRt1zLVO3FkoyzSFwvmrXsXRoq3g/ZKh1zhd+Kjq0wt5F6CLPb4qja26mk+LuLsn17dXRFjR6CCffsA4JiXFICKc7S195I6gMY3m0UEERf8oJ0J7NKT7vIAaF739jO5GybP9p2tlKvjL2fn9ibPKgoY2rOG+iDnGQBKksULnBJM9KsUVnCGJVg8udffZCimr4Pris34PogwqSkTlrlSQbDj6l+HMIgyKqU2k0aqN0CETBhP7cRpTiNy07HKoUkOOM7Us+QlmASwaREPztEBIVgQkmFfqZWzcJOeE2VZuKAX4M+uL0GgsPuKRCGo/F4yEocK0yGoz/Kb48OFub5txRR0AfJ6xonjUVuxPLcgBVYVupudgfPnww7wBBRiJMSTIC60txaCpTZKmIYU9Y0eR3LaiyDz44+rPEu/fCy5UKdp+tZvi1jR8PtKF0s7xs72vtcMYdX1uVcetUPrPf2DyBgAsopI9WO5OWKYS7slaBTV2PmNSNazowJCj0ttVwWj/ZYsUJzv27sodDQm4jl1MPH+ub6rGny4pLW98yYl4vVdTSO1c5HfRCiOw7Qr8XM8oT5/Y5rt2nN6I+dvEqCERIFivFgjo0xJy7vF+wtxGNxGnMhTwzqygdiTo/xTJUU0Tsb4W7K68I0O01J7DHarPgw7Ss0yY/HCr/s1M2q+40wemU/hd0E/3t278Q7i7HP/i8YP16Tf0mkgnTWPNom2StLZ6XPlazsCXVDWjZleQmeD7k5D13/pM6pBp7Pv/ogTyCNMnIDEwDTkGQ4BH1AsqrzrJ5G2W+KqbKuT7ex3XWewJLKnznY4xsqKbzlXVrH7HDAjwfDPrg1cp7bFNKP+AC5+8yhAZ5/A3i5nlZaBwAA', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
