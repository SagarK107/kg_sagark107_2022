var arguments = process.argv.slice(2);


digits = {
    0 : "Zero",
    1 : "One",
    2 : "Two",
    3 : "Three",
    4 : "Four",
    5 : "Five",
    6 : "Six",
    7 : "Seven",
    8 : "Eight",
    9 : "Nine"
};
let final_str = "";
for (const number of arguments)
{
    let num_str = "";
    for(var i = 0; i < number.length; i++)
    {
        
        num_str += digits[parseInt(number.charAt(i))];
    }
    final_str += num_str + ",";
}

console.log(final_str.slice(0,-1));