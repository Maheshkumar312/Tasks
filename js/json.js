function trainerData()
    {
 
      var arr=[
        {
          'num':1,
          'first':'mahesh',
          'last':'kumar',
          'handle':'fb'
        },
        {
          'num':2,
          'first':'ravi',
          'last':'kumar',
          'handle':'wtsapp'
        },
        {
          'num':3,
          'first':'sharukh',
          'last':'kumar',
          'handle':'insta'
        },
        {
          'num':4,
          'first':'pb',
          'last':'kumar',
          'handle':'all'
        },
      ];


      var htmlstr="";
      for(var i=0;i<arr.length;i++)
      {
        htmlstr='<tr>';
        htmlstr+='<th scope="row">'+arr[i].num+'</th>';
        htmlstr+='<td >'+arr[i].first+'</td>';
      htmlstr+='<td>'+arr[i].last+'</a></td>';
        htmlstr+='<td>'+arr[i].handle+'</td>';
       htmlstr+='</tr>';
       $("#appendtable").append(htmlstr);
       $(document).ready(function () {
        $('#appendtable').DataTable();
    });
       
      }
     
    }
