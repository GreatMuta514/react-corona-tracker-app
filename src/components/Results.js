const Results = (props) => {
    return (
        <div>
            { console.log(props) }
            <p>日付：{ props.countryData.date.slice(0, 10) }</p>
            <p>新規感染者：{ props.countryData.newConfiremed.toLocaleString() }</p>
            <p>感染者総数：{ props.countryData.totalConfiremed.toLocaleString() }</p>
            <p>新規回復者：{ props.countryData.newRecovered.toLocaleString() }</p>
            <p>回復者総数：{ props.countryData.totalRecovered.toLocaleString() }</p>
        </div>
    );
};

export default Results;