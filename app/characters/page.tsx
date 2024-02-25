import CharacterList from "@/components/CharacterList/CharacterList";


const Characters = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#00B2CB'}}>
            <h1 style={{textAlign: "center", fontWeight: 700, fontSize: 30, margin: '15px 0'}}>Персонажи</h1>
            <CharacterList />
        </div>
    );
};

export default Characters;
