import Article from "./Article"

function Articlelist({ blogData }) {
    console.log({ blogData })

    return (
        <main>
        {blogData.map(data => <Article key={data.id} title={data.title} date={data.date} preview={data.preview} minutes={data.minutes}/>)}
        </main>
    )
}
export default Articlelist;

