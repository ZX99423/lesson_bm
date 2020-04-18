// console.log('hello member')

// 有什么问题？ 
// 1. 写死了， 不能动态更新， 
// 2. js   uuid npm 
// 3. 数据不合法， 数据不严谨  如何让不严谨的数据守规矩？ 
// 接口
interface MembersEntity {
  id: number;
  name: string;
  avatar: string;
  phone: number;
  address: string;
}  


const members: MembersEntity[] = []

const myform = document.forms.myform;
myform.addEventListener('submit',function(event) {
  event.preventDefault();
  const id = myform.idInput.value;
  const name = myform.nameInput.value;
  const avatar = myform.avatarInput.value;
  const phone = parseInt(myform.phoneInput.value);
  const address = myform.addressInput.value;
  if(id.trim().length ===0){
    alert('id 不能为空');
    return;
  }
  if(name.trim().length ===0){
    alert('name 不能为空');
    return;
  }
  const userid = parseInt(id);
  console.log(userid,name,avatar,phone,address);
  members.push({
    id: userid,
    name: name,
    avatar: avatar,
    phone: phone,
    address: address
  })
  console.log(members);
  const tbody = document.querySelector('#member tbody');
tbody.innerHTML = members.map((member) => {
    return `
      <tr>
        <td>${member.id}</td>
        <td>${member.name}</td>
        <td>
          <img src="${member.avatar}" />
        </td>
        <td>${member.phone}</td>
        <td>${member.address}</td>
      </tr>
    `
  }).join('')
})


// tbody.innerHTML =
// 从json 数组 变成了 html 数组 tbody 最想要的
