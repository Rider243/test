////////////// YÊU CẦU DỮ LIỆU TỪ SERVER- REQUEST DATA //////////////
var myVar = setInterval(myTimer, 100);
function myTimer()
{
    socket.emit("Client-send-data", "Request data client");
}

 // Chương trình con đọc dữ liệu lên IO Field
 function fn_IOFieldDataShow(tag, IOField, tofix){
    socket.on(tag,function(data){
        if(tofix == 0){
            document.getElementById(IOField).value = data;
        } else{
        document.getElementById(IOField).innerText  = data.toFixed(tofix);
        }
    });
}



//////////////////////////gauge/////////////
  // đồng hồ đo áp suất các thứ
  var value_gauge;
  function  gauge_temp(id,data_pre,name)
   {
 
     
     socket.on(data_pre, function (data)
     { 
 
       gaugePS.value=data;  
 
       value_gauge= gaugePS.value;
     
      
       
 
     if (data>=0&&data<=110) {
         
           
       gaugePS.update({
           colorBarProgress: 'yellow'
         });
       
   }
     else if (data>110&&data<=380) {
     
            
       gaugePS.update({
           colorBarProgress: '#00FF00'
         });
       
   }
       
 
    else   {
      
       gaugePS.update({
           colorBarProgress: 'red'
         });
       
    }
 
    gaugePS.draw(); 
   
 
 });
 
     
      
     var gaugePS = new RadialGauge({
         renderTo: id,
         width: 220,
         height: 220,
         units: name,
         minValue: 0,
         maxValue: 450,
         value:0,
         majorTicks: [
             '0',
             '50',
             '100',
             '150',
             '200',
             '250',
             '300',
             '350',
             '400',
             '450'
         ],
         minorTicks: 1,
         ticksAngle: 270,
         startAngle: 45,
         strokeTicks: true,
         highlights  : [
             { from : 0,  to : 100, color : 'yellow' },
             { from : 100,  to : 380, color : '#00FF00' },
             { from : 380, to : 450, color : 'red' }
         ],
         valueInt: 1,
         valueDec: 0,
         colorPlate: "#fff",
         colorMajorTicks: "#686868",
         colorMinorTicks: "#686868",
         colorTitle: "#000",
         colorUnits: "#000",
         colorNumbers: "#686868",
         valueBox: true,
         colorValueText: "#000",
         colorValueBoxRect: "#fff",
         colorValueBoxRectEnd: "#fff",
         colorValueBoxBackground: "#fff",
         colorValueBoxShadow: false,
         colorValueTextShadow: false,
         colorNeedleShadowUp: true,
         colorNeedleShadowDown: false,
         colorNeedle: "rgba(200, 50, 50, .75)",
         colorNeedleEnd: "rgba(200, 50, 50, .75)",
         colorNeedleCircleOuter: "rgba(200, 200, 200, 1)",
         colorNeedleCircleOuterEnd: "rgba(200, 200, 200, 1)",
         borderShadowWidth: 0,
         borders: true,
         borderInnerWidth: 0,
         borderMiddleWidth: 0,
         borderOuterWidth: 5,
         colorBorderOuter: "#fafafa",
         colorBorderOuterEnd: "#cdcdcd",
         needleType: "arrow",
         needleWidth: 2,
         needleCircleSize: 7,
         needleCircleOuter: true,
         needleCircleInner: false,
         animationDuration: 1500,
         animationRule: "dequint",
         fontNumbers: "Verdana",
         fontTitle: "Verdana",
         fontUnits: "Verdana",
         fontValue: "Led",
         fontValueStyle: 'italic',
         fontNumbersSize: 20,
         fontNumbersStyle: 'italic',
         fontNumbersWeight: 'bold',
         fontTitleSize: 24,
         fontUnitsSize: 30,
         fontValueSize: 50,
         animatedValue: true, 
         barWidth:10,
         barShadow: 10
 
         
       
         // colorBarProgress: 'red'
          
        
        
     });  
   }


   var info_l1_line=[];
   var info_l2_line=[];
   var info_l3_line=[];
   var info_l1_phase=[];
   var info_l2_phase=[];
   var info_l3_phase=[];
   var info_l1_phase_cr=[];
   var info_l2_phase_cr=[];
   var info_l3_phase_cr=[];
   var date_time_detail=[];



   
// Chương trình con hiển thị SQL ra bảng
function fn_table(data){


 info_l1_line.length=0;
 info_l2_line.length=0;
 info_l3_line.length=0;
 info_l1_phase.length=0;
 info_l2_phase.length=0;
 info_l3_phase.length=0;
 info_l1_phase_cr.length=0;
 info_l2_phase_cr.length=0;
 info_l3_phase_cr.length=0;
 date_time_detail.length=0;

  if(data){
      $("#table_info tbody").empty(); 
      var len = data.length;
      var count = 0;
      var txt = "<tbody>";

      if(len > 0){
        for (var i = len - 1; i >= 0 && count < 1000; i--)
        {
                 count++;
                  txt += "<tr><td>"+data[i].date_time 
                      +"</td><td>"+data[i].L1_line
                      +"</td><td>"+data[i].L2_line
                      +"</td><td>"+data[i].L3_line 
                      +"</td><td>"+data[i].L1_phase
                      +"</td><td>"+data[i].L2_phase
                      +"</td><td>"+data[i].L3_phase
                      +"</td><td>"+data[i].L1_phase_cr
                      +"</td><td>"+data[i].L2_phase_cr
                      +"</td><td>"+data[i].L3_phase_cr
                      +"</td></tr>";


                  info_l1_line.push(data[i].L1_line)
                  info_l2_line.push(data[i].L2_line)
                  info_l3_line.push(data[i].L3_line)
                  info_l1_phase.push(data[i].L1_phase)
                  info_l2_phase.push(data[i].L2_phase)
                  info_l3_phase.push(data[i].L3_phase)
                  info_l1_phase_cr.push(data[i].L1_phase_cr)
                  info_l2_phase_cr.push(data[i].L2_phase_cr)
                  info_l3_phase_cr.push(data[i].L3_phase_cr)
                  date_time_detail.push(data[i].date_time)
 

                  }
          if(txt != ""){
          txt +="</tbody>"; 
          $("#table_info").append(txt);
          }
      }
  }   

  Draw_Chart_detail() ;
}

function fn_SQL_By_Time()
{
  // console.log('le tan loc');
    var val = [document.getElementById('dtpk_Search_Start').value,
               document.getElementById('dtpk_Search_End').value];
    socket.emit('msg_SQL_ByTime', val);
    
}

function fn_SQL_By_Time_display()
{
    socket.on('SQL_ByTime', function(data){
        fn_table(data); // Show sdata
        // console.log(data);
    });
}



// Gửi yêu cầu xuất Excel qua index.js
function fn_excel(){
   
  socket.emit("msg_Excel_Report", true);
  
}

function fn_excel_display()
{
  var linktext = "";
  var bookname = "";
  socket.on('send_Excel_Report',function(data){
      linktext = data[0];
      bookname = data[1];
      // Delay save as
      var delayInMilliseconds = 3000; //Delay 1 second
      setTimeout(function() {
          saveAs(linktext, bookname);
      }, delayInMilliseconds);          
  }); 
}



function Draw_Chart_detail()
{

        //  console.log("lần 1");
      
     
        // Generate values

        var x1Values = [];
        // var x2Values = [];
        // var x3Values = [];
        // var x4Values = [];
        // var x5Values = [];
        // var x6Values = [];
        // var x7Values = [];

        var y1Values = [];
        var y2Values = [];
        var y3Values = [];
        var y4Values = [];
        var y5Values = [];
        var y6Values = [];
        var y7Values = [];
        var y8Values = [];
        var y9Values = [];
        var y10Values = [];
      


      
            


        x1Values.push(...date_time_detail);
        // x2Values.push(...date_time_lifter_1_detail);
        // x3Values.push(...date_time_lifter_1_detail);
        // x4Values.push(...date_time_lifter_1_detail);
        // x5Values.push(...date_time_lifter_1_detail);
        // x6Values.push(...date_time_lifter_1_detail);
        // x7Values.push(...date_time_lifter_1_detail);


        y1Values.push(...info_l1_line);
        y2Values.push(...info_l2_line);
        y3Values.push(...info_l3_line);
        y4Values.push(...info_l1_phase);
        y5Values.push(...info_l2_phase);
        y6Values.push(...info_l3_phase);
        y7Values.push(...info_l1_phase_cr);
        y8Values.push(...info_l2_phase_cr);
        y9Values.push(...info_l3_phase_cr);
      


        
     
        
        
       

        // Define Data
        var data = [
        {x: x1Values, y: y1Values,mode:'lines', name: 'L1-L2',hoverinfo:'x+y', nticks: 10,fixedrange: true },
        {x: x1Values, y: y2Values, mode:"lines", name: 'L2-L3',hoverinfo:'x+y', nticks: 10,fixedrange: true},
        {x: x1Values, y: y3Values, mode:"lines", name: 'L3-L1',hoverinfo:'x+y', nticks: 10,fixedrange: true},
        {x: x1Values, y: y4Values,mode:'lines', name: 'Phase L1-N',hoverinfo:'x+y', nticks: 10 ,fixedrange: true},
        {x: x1Values, y: y5Values, mode:"lines", name: 'Phase L2-N',hoverinfo:'x+y', nticks: 10,fixedrange: true},
        {x: x1Values, y: y6Values, mode:"lines", name: 'Phase L3-N',hoverinfo:'x+y', nticks: 10,fixedrange: true},
        {x: x1Values, y: y7Values, mode:"lines", name: 'Current L1',hoverinfo:'x+y', nticks: 10,fixedrange: true},
        {x: x1Values, y: y8Values, mode:"lines", name: 'Current L2',hoverinfo:'x+y', nticks: 10,fixedrange: true},
        {x: x1Values, y: y9Values, mode:"lines", name: 'Current L3',hoverinfo:'x+y', nticks: 10,fixedrange: true}
        ];

        //Define Layout
       // var layout = {title: "Biểu đồ thông số quạt"};

        var layout = {
            title: "Biểu đồ hệ thống điện RD",
            yaxis:
         {
           
            // showline: true,
            // fixedrange: true,
            range: [0, 400],
            autotick: false,
            tick0: 0,
            dtick:100,
        },
          };

        // Display using Plotly
        Plotly.newPlot("chart_detail", data, layout);
        // console.log(x1Values);            
}

 


 
 