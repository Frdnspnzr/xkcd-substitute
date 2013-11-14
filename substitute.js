var tags = ["p","article","h1","h2","h3","h4","li"]

for (var t = 0; t < tags.length; t++) {

	// If there's one more case of case (YEAAHH!) I really should do it different!
	var elements = document.body.getElementsByTagName(tags[t]);
	for (var i = 0; i < elements.length; i++) {

		// witnesses --> these dudes I know
		elements[i].innerHTML = elements[i].innerHTML.replace("witnesses","these dudes I know")
		.replace("Witnesses","These dudes I know")
		.replace("WITNESSES","THESE DUDES I KNOW")

		// allegedly --> kinda propably
		.replace("allegedly","kinda propably")
		.replace("Allegedly","Kinda propably")
		.replace("ALLEGEDLY","KINDA PROPABLY")

		//new study --> tumblr post
		.replace("new study","tumblr post")
		.replace("New study","Tumblr post")
		.replace("NEW STUDY","TUMBLR POST")

		// rebuild --> avenge
		.replace("rebuild","avenge")
		.replace("Rebuild","Avenge")
		.replace("REBUILD","AVENGE")

		// space --> spaaace
		.replace("space","spaaace")
		.replace("Space","Spaaace")
		.replace("SPACE","SPAAACE")

		// Google Glass --> Virtual Boy
		.replace("Google Glass","Virtual Boy")
		.replace("GOOGLE GLASS","VIRTUAL BOY")

		// smartphone --> Pokédex
		.replace("smartphone","Pokédex")
		.replace("Smartphone","Pokédex")
		.replace("SMARTPHONE","POKÉDEX")

		// electric --> atomic
		.replace("electric","atomic")
		.replace("Electric","Atomic")
		.replace("ELECTRIC","ATOMIC")

		// senator --> elf-lord
		.replace("senator","elf-lord")
		.replace("Senator","Elf-Lord")
		.replace("SENATOR","ELF-LORD")

		// car --> cat
		.replace("car","cat")
		.replace("Car","Cat")
		.replace("CAR","CAT")

		// election --> eating contest
		.replace("election", "eating contest")
		.replace("Election", "Eating contest")
		.replace("ELECTION", "EATING CONTEST")

		// congressional leaders --> river spirits
		.replace("congressional leaders", "river spirits")
		.replace("Congressional leaders", "River spirits")
		.replace("CONGRESSIONAL LEADERS", "RIVER SPIRITS")

		// Homeland Security --> homestar runner
		.replace("Homeland Security", "Homestar Runner")
		.replace("HOMELAND SECURITY", "HOMESTAR RUNNER")

		// could not be reached for comment --> is guilty and everyone knows it
		.replace("could not be reached for comment", "is guilty and everyone knows it")
		.replace("couldn't be reached for comment", "is guilty and everyone knows it")
		.replace("Could not be reached for comment", "is guilty and everyone knows it")
		.replace("Couldn't be reached for comment", "is guilty and everyone knows it")
		.replace("COULD NOT BE REACHED FOR COMMENT", "IS GUILTY AND EVERYONE KNOWS IT")
		.replace("COULDN'T BE REACHED FOR COMMENT", "IS GUILTY AND EVERYONE KNOWS IT");
		
	}

}