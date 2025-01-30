const stories = [
"El viento canta entre las hojas, un susurro lejano, como un viejo recuerdo que nunca se olvida, trayendo consigo historias del pasado",
"La luna llena ilumina el cielo, su luz suave como un beso, y en su brillo encuentro paz, en su reflejo, todo se hace silencio",
"Las estrellas caen lentamente, como susurros del universo, cada una lleva un deseo, cada una guarda un verso",
"El mar susurra en la orilla, como un canto ancestral, cada ola que llega trae consigo un secreto sin igual",
"Bajo el cielo estrellado, el mundo parece detenerse, el silencio se hace profundo, y el alma se encuentra en paz",
"El sol se esconde tras las montañas, pintando el cielo de rojo y oro, cada tarde se repite el milagro, y el día se convierte en un tesoro",
"Las flores del jardín abren sus pétalos, revelando su fragancia al viento, cada una con una historia, cada una con un sentimiento",
"La lluvia cae suavemente, como un suspiro del cielo, limpiando el alma del mundo, y trayendo consigo consuelo",
"El río corre tranquilo, reflejando el sol en su corriente, lleva consigo historias lejanas, historias de un tiempo diferente",
"Las sombras bailan al ritmo del viento, moviéndose en silencio, mientras la luna observa desde lo alto, un espectador de este misterio inmenso",
"El sol brilla con fuerza en el horizonte, pintando el cielo de colores cálidos, cada amanecer es un renacer, cada día es un nuevo latido",
"La noche llega con su manto oscuro, cubriendo al mundo con su calma, bajo sus estrellas, el corazón se serena, y la mente se embriaga de alma",
"El eco de un suspiro se pierde en el aire, como un sueño que se desvanece, pero en el corazón queda su recuerdo, como un amor que nunca perece",
"El viento susurra entre los árboles, como un verso que se escapa, llevando consigo secretos olvidados, mientras el mundo se adapta",
"El tiempo fluye como un río, llevando consigo todo lo vivido, pero en el alma queda lo eterno, lo que nunca ha sido perdido",
"La luna se refleja en el lago, su luz tan pura como el cristal, cada noche se convierte en un espejismo, en un sueño celestial",
"El sol se pone lentamente, dibujando sombras en el suelo, cada atardecer es un adiós, un despedirse del cielo",
"Las estrellas brillan como ojos en el firmamento, testigos de historias que nunca se contaron, guardianas de secretos que se llevan al viento",
"La brisa acaricia mi rostro, llevando consigo el perfume de la tierra, y en su frescura, encuentro consuelo, en su susurro, mi alma se aferra",
"En la quietud de la noche, el corazón susurra sus deseos, bajo el manto estrellado, se pierden mis pensamientos, mis sueños",
"El río fluye sin prisa, su corriente es su canción, lleva consigo historias antiguas, historias del corazón",
"La flor se abre con timidez, mostrando su belleza al sol, y en cada pétalo se esconde un sueño, un anhelo sin control",
"El viento sopla con fuerza, llevando consigo el eco de la naturaleza, mientras el sol se oculta tras las montañas, dejando paso a la luna, su compañera de belleza",
"Cada hoja que cae al suelo, es un adiós al tiempo, un recordatorio de que todo pasa, que nada se queda eterno",
"El horizonte se tiñe de naranja, el sol se despide en silencio, y en su despedida encuentro consuelo, pues sé que mañana volverá con su aliento",
"La luna llena ilumina el mar, su reflejo parece danzar, como una melodía suave, que calma el alma al respirar",
"El otoño llega con su aroma a tierra mojada, a hojas caídas y cielos grises, pero en su melancolía encuentro belleza, encuentro lo que se esconde en los matices",
"Las estrellas son como promesas, que el cielo hace al corazón, guardan en su luz la esperanza, que brilla sin condición",
"El viento canta su melodía, llevando consigo las voces del pasado, y cada nota es un suspiro, un recuerdo amado",
"La luna se asoma tímidamente, observando el mundo desde lo alto, mientras el mar la mira en silencio, como un amante fiel, un abrazo a su encanto",
"El cielo se cubre de nubes grises, pero en su oscuridad se encuentran secretos, que el alma recoge, que el corazón guarda en sus huecos",
"El amanecer pinta el cielo de colores suaves, un lienzo perfecto que el día empieza a llenar, y en su luz encuentro esperanza, en su brillo, puedo respirar",
"La lluvia se convierte en música, que acompaña al alma en su viaje, cada gota es un verso, cada sonido, un mensaje",
"El fuego arde en silencio, su luz es como un faro en la oscuridad, y en su calor encuentro refugio, en su danza, toda mi verdad",
"La luna se oculta tras las montañas, dejando espacio a las estrellas, que brillan con fuerza en la noche, iluminando las huellas",
"El eco de un suspiro se pierde en el aire, como un sueño que se desvanece, pero en el corazón queda su recuerdo, como un amor que nunca perece",
"El mar siempre vuelve a la orilla, como un amante que nunca se va, sus olas siempre regresan, y en su canto, me quiero quedar",
"La oscuridad de la noche envuelve al mundo, pero las estrellas son su luz, cada una brilla con fuerza, mostrando el camino que sigue la cruz",
"El perfume de las flores se mezcla con el viento, trayendo consigo recuerdos de un tiempo lejano, de un amor que nunca se olvida, de un encuentro temprano",
"El sol se oculta tras el horizonte, pero su luz sigue viva en el cielo, y en su despedida queda una promesa, de que regresará, siempre a su anhelo",
"La luna brilla en la oscuridad, como una amiga fiel que nunca se olvida, y en su luz, el mundo se calma, todo se vuelve una eterna melodía",
"La brisa lleva consigo canciones de antaño, de amores perdidos y sueños olvidados, pero en su canto hay esperanza, hay un mensaje escondido entre los latidos",
"El horizonte se pierde en la lejanía, pero cada paso que doy me acerca a ti, y en la distancia se encienden luces, como estrellas que guían mi sentir",
"La noche se cubre de misterio, y bajo su manto encuentro calma, cada estrella es un pensamiento, cada sombra una alarma",
"El tiempo fluye como un río, y aunque no lo veamos, siempre avanza, llevándonos consigo, sin que podamos pedirle un descanso, sin esperanza",
"El viento sopla con fuerza, pero en su caos encuentro paz, pues en su furia hay música, hay armonía que nunca se va",
"Las estrellas caen como lágrimas del cielo, trayendo consigo deseos perdidos, cada uno es un suspiro, cada uno es un destino",
"El sol se esconde tras las nubes, pero su luz sigue brillando, y en su reflejo encuentro fuerzas, fuerzas para seguir andando",
"La tierra suspira en silencio, mientras el viento la acaricia, y en su abrazo se esconde la verdad, la que el alma codicia",
"El mar canta su canción, arrullando al corazón, sus olas son caricias, sus susurros son bendición",
"La flor se abre lentamente, mostrando su belleza al sol, y cada pétalo que cae, es una historia que cuenta el alma en su rol",
"El fuego danza en la chimenea, su luz titila y se apaga, pero en su calor encuentro calma, y en su chispa mi alma se embriaga",
"El otoño pinta de dorado el suelo, sus hojas caen sin cesar, y en cada una se esconde un deseo, un suspiro que se deja llevar",
"La noche susurra secretos, mientras la luna observa en silencio, y en sus ojos se refleja el universo, su brillo eterno, su pensamiento",
"El viento trae consigo susurros de libertad, como una promesa que nunca se olvida, y en su canto encuentro serenidad, en su flujo encuentro vida",
"Las estrellas brillan como diamantes, y cada una guarda un sueño, cada destello es una esperanza, un anhelo en el misterio, un pequeño reino",
"La luna se alza en el cielo, iluminando el camino, y en su luz descubro el amor, un amor que no tiene fin, un amor divino",
"El río fluye tranquilo, llevando consigo el tiempo, y en su paso encuentro consuelo, y en su murmullo, mi pensamiento",
"Las sombras se alargan en la noche, pero la luna siempre las acompaña, y aunque el miedo se esconde en ellas, su luz nunca se desengaña",
"El sol se asoma lentamente, despertando al mundo con su calor, y en su luz renace la esperanza, en su brillo florece el amor",
"Las hojas caen suavemente, como un adiós silencioso, pero cada una guarda un suspiro, un sueño, un abrazo hermoso",
"La oscuridad de la noche se llena de magia, y bajo su manto todo se transforma, cada estrella es una historia, cada sombra una forma",
"El cielo se viste de colores, el sol se despide en silencio, y en su ocaso encuentro calma, en su último aliento, consuelo",
"La luna observa desde el cielo, testigo de todos los secretos, y en su luz se reflejan los sueños, los anhelos, los momentos",
"El viento lleva consigo las palabras no dichas, susurra historias en el aire, y en su canto se esconde la verdad, la que el corazón quiere",
"Las estrellas brillan con fuerza, marcando el camino hacia el amor, y aunque el tiempo pase, siempre guardarán su fulgor",
"El mar siempre vuelve a la orilla, abrazando suavemente la tierra, y en su vaivén encuentro calma, en su abrazo, mi alma se aferra",
"La luna se oculta tras las nubes, pero su luz sigue brillando, y en su oscuridad encuentro fuerza, en su luz, voy caminando",
"El horizonte se tiñe de rojo, el sol se despide del día, y en su despedida, deja un suspiro, una promesa que nunca se olvida",
"El cielo se cubre de estrellas, cada una brilla con su luz, y en su reflejo se esconden secretos, se encienden sueños, se muestra la cruz",
"La brisa es como un suspiro, que acaricia el alma en su paso, y en su frescura encuentro paz, en su suavidad abrazo",
"Las sombras se alargan en la noche, pero siempre hay una estrella que brilla, y en su luz, el miedo se desvanece, la oscuridad se aniquila",
"El río fluye sin cesar, llevando consigo todo lo vivido, y en sus aguas encuentro consuelo, en su curso sigo perdido",
"Las estrellas son como susurros del universo, sus luces parpadean en el cielo, y en su brillo encuentro la paz, en su fulgor todo es bueno",
"La luna se alza en el firmamento, testigo de todos los sueños, y en su luz, descubro mi camino, en su brillo encuentro mi dueño",
"El viento susurra en los árboles, cada hoja se mueve al ritmo, y en su danza encuentro poesía, en su susurro, infinito",
"Las nubes cubren el cielo, pero nunca se olvidan de brillar, y aunque se escondan por momentos, siempre regresan al final",
"La noche se llena de estrellas, cada una cuenta su historia, y en su fulgor encuentro respuestas, y en su luz se refleja la gloria",
"El sol se oculta lentamente, pero su calor se queda en el aire, y en su último aliento de luz, el día se despide sin que nadie pare",
"Las hojas caen suavemente, como un adiós al viento, y aunque se alejan de sus ramas, nunca pierden su aliento",
"La luna brilla en la oscuridad, su luz es como un faro, y en su fulgor encuentro calma, en su luz, me hallo claro",
"El mar susurra en la orilla, su canto es tan profundo, y en su voz encuentro serenidad, y en su agua, un mundo",
"Las estrellas caen como lluvia, trayendo consigo el deseo, y cada una guarda un sueño, un anhelo, un misterio",
"La brisa acaricia mi piel, llevándome lejos, y en su suave movimiento, encuentro paz en sus reflejos",
"El sol se oculta tras las montañas, su luz desaparece en el horizonte, y aunque se va, su calor siempre queda, su esencia nunca se esconde",
"La luna se alza en el cielo, su luz es suave y brillante, y bajo su manto encuentro calma, en su fulgor soy amante",
"El viento acaricia el mar, llevando consigo el suspiro de la tierra, y en su movimiento se esconde la paz, la que el alma nunca cierra",
"La luna brilla en el cielo, testigo de mis pensamientos",
"El sol se despide suavemente, tiñendo el cielo de rojo y oro, y en su ocaso dejo un suspiro, esperando que regrese mañana con su alborozo",
"Las olas se rompen en la orilla, susurrando secretos al viento, y en cada espuma encuentro un deseo, en cada ola, un pensamiento",
"La luna se oculta detrás de las nubes, pero su brillo nunca se apaga, en su ausencia encuentro paz, en su luz, mi alma se deshaga",
"El viento corre entre las montañas, llevando consigo los ecos del pasado, y en su paso, encuentro respuestas a lo que había olvidado",
"El río fluye sin cesar, llevando consigo el tiempo y la memoria, y en su corriente hallo consuelo, en su murmullo, su historia",
"Las estrellas titilan en el cielo, cada una guardando un deseo, y en su brillo se esconde la magia, la que el corazón en silencio anhelo",
"La brisa de la tarde acaricia mi rostro, trayendo consigo el aroma a tierra, y en su frescura encuentro la calma, en su soplo mi alma se aferra",
"El mar siempre está ahí, sin importar el tiempo ni el lugar, y aunque el viento lo sacuda, su calma siempre volverá a encontrar",
"La luna llena ilumina el mundo, su luz es como un abrazo, que abraza cada rincón en la oscuridad, y en su brillo todo se hace abrazo",
"El otoño pinta de dorado el paisaje, las hojas caen como suspiros, y en su danza descubro que, al final, todo vuelve a ser un giro",
"El sol se alza con fuerza, despidiendo las sombras de la noche, y en su luz se despiertan los sueños, en su calor brotan los brotes"
 
];

while (stories.length < 100) {
    stories.push("");
}

let usedStories = new Set();

document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const themeButton = document.getElementById('toggle-theme');
    if (document.body.classList.contains('dark-mode')) {
        themeButton.textContent = 'Cambiar a modo claro';
    } else {
        themeButton.textContent = 'Cambiar a modo oscuro';
    }
});

document.getElementById('generate-story').addEventListener('click', () => {
    if (usedStories.size === stories.length) {
        usedStories.clear();
    }
    let story;
    do {
        story = stories[Math.floor(Math.random() * stories.length)];
    } while (usedStories.has(story));
    usedStories.add(story);
    document.getElementById('story').innerHTML = formatStory(story);
});

function formatStory(story) {
    const words = story.split(' ');
    for (let i = 8; i < words.length; i += 9) {
        words[i] += '<br>';
    }
    return words.join(' ');
}