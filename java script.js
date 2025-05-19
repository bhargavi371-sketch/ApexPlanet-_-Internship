function display(sectionId) {
    const sections = ['sectionHome', 'sectionFavouritePlaces', 'sectionTajMahalDetailedView', 'sectionGoldenTempleDetailedView'];
    for (let id of sections) {
        document.getElementById(id).style.display = (id === sectionId) ? 'block' : 'none';
    }
}

function startTourism() {
    alert("Welcome to the Tourism Page!");
    display('sectionFavouritePlaces');
}