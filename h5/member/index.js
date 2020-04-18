// console.log('hello member')
var members = [];
var myform = document.forms.myform;
myform.addEventListener('submit', function (event) {
    event.preventDefault();
    var id = myform.idInput.value;
    var name = myform.nameInput.value;
    var avatar = myform.avatarInput.value;
    var phone = parseInt(myform.phoneInput.value);
    var address = myform.addressInput.value;
    if (id.trim().length === 0) {
        alert('id 不能为空');
        return;
    }
    if (name.trim().length === 0) {
        alert('name 不能为空');
        return;
    }
    var userid = parseInt(id);
    console.log(userid, name, avatar, phone, address);
    members.push({
        id: userid,
        name: name,
        avatar: avatar,
        phone: phone,
        address: address
    });
    console.log(members);
    var tbody = document.querySelector('#member tbody');
    tbody.innerHTML = members.map(function (member) {
        return "\n      <tr>\n        <td>" + member.id + "</td>\n        <td>" + member.name + "</td>\n        <td>\n          <img src=\"" + member.avatar + "\" />\n        </td>\n        <td>" + member.phone + "</td>\n        <td>" + member.address + "</td>\n      </tr>\n    ";
    }).join('');
});
// tbody.innerHTML =
// 从json 数组 变成了 html 数组 tbody 最想要的
