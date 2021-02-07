const table = [-1500, -8, 0, 16, 42];
var counter = 0;
function write(table)
{
  for( var a = counter; a < table.length; a++)
  {
      table[a] = (table[a] - (2*table[a]));
    var arr = table;
  }
  console.log(arr);
}
write(table);