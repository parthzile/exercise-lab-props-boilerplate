// Complete this component

const Image = ({data}) => {

    return(
        <div>
        {data.map(function(element){
            return <img src={element.img} alt="" key={element.id}/>
        })
    }
        </div>
    
    )
}





export default Image