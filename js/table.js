// --------------动态创建表格---------------------
function createTable(parent, headData, bodyData) {
  // 1 创建表头
  var table = createHead(parent, headData);
  // 2 创建数据行    
  createBody(table, bodyData);
}

// ----------------创建表头------------------------
function createHead(parent, headData) {
  // 表头
  var table = document.createElement('table');


  table.border = '1px';
  table.cellSpacing = '0';
  table.width = '500px';
  parent.appendChild(table);


  var thead = document.createElement('thead');
  table.appendChild(thead);

  var tr = document.createElement("tr");
  thead.appendChild(tr);


  tr.style.height = '50px';
  tr.style.backgroundColor = 'lightgray';


  headData.forEach(function (item) {
    var th = document.createElement('th');
    tr.appendChild(th);

    setInnerText(th, item);
  });
  return table;
}

//---------------创建数据行----------------------------
function createBody(table, bodyData) {

  var tbody = document.createElement('tbody');
  table.appendChild(tbody);

  tbody.style.textAlign = 'center';

  bodyData.forEach(function (item) {
    var tr = document.createElement('tr');
    tbody.appendChild(tr);

    tr.style.height = '50px';
    tr.style.backgroundColor = "#fff";
// 遍历 对象 创建列 forin
    for (var key in item) {
      var td = document.createElement('td');
      tr.appendChild(td);
      setInnerText(td, item[key]);
    }
  // 操作的列td
    td = document.createElement('td');
    tr.appendChild(td);
//创建删除的超链接
    var link = document.createElement('a');
    link.href = 'javascript:void(0)';
    td.appendChild(link);
    setInnerText(link, '删除');
  // 注册事件
    link.onclick = linkClick;
  });
//事件处理函数
  function linkClick() {
    // 删除提示
    var r = confirm('是否确定删除？');
    //boolean类型
    if (r) {
      //通过当前（this）link的父节点的父节点获取行tr
      var tr = this.parentNode.parentNode;
      tbody.removeChild(tr);
    }
  }

}