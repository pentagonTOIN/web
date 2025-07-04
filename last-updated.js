const repoOwner="pentagonTOIN";
const repoName="web";

fetch("https://api.github.com/repos/pentagonTOIN/web/commits")
  .then(response=>response.json())
  .then(data=>{
    const date=new Date(data[0].commit.committer.date);
    const formattedDate=date.getFullYear()+"年"+
                        (date.getMonth()+1)+"月"+
                        date.getDate()+"日";
    document.getElementById("last-updated").textContent="最終更新日："+formattedDate;
  })
  .catch(error=>{
    console.error("取得失敗：",error);
    document.getElementById("last-updated").textContent="最終更新日：取得失敗";
  });
