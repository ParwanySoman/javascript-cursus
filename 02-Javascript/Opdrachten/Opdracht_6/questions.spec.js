describe("", function() {
  it('Create a "languages" array containing "Html", "CSS", "Java", "PHP"', function () {
      var languages = CreationArrayLanguages();
      expect(languages).toEqual(["Html","CSS","Java","PHP"]);
  });
  it('Create a "numbers" array containing the numbers from 0 to 5', function () {
      var numbers = CreateArrayNumbers();
      expect(numbers).toEqual([0,1,2,3,4,5]);
  });
  it('Replace the third element of the array with "Javascript".', function () {1
      var languages = ["Html","CSS","Java","PHP"];
      var languages = ReplacementElement(languages);
      expect(languages).toEqual(['Html', 'CSS', 'Javascript', 'PHP']);
  });
  it('Add "Ruby" and "Python" at the end of the array', function () {
      var languages = ['Html', 'CSS', 'Javascript', 'PHP'];
      var languages = AddElementLanguages(languages);
      expect(languages).toEqual(['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python']);
  });
  it('Add "-2" and "-1" at the beginning of the table numbers', function () {
      var numbers = [0,1,2,3,4,5];
      var numbers = AddElementNumbers(numbers);
      expect(numbers).toEqual([-2,-1,0,1,2,3,4,5]);
  });
  it('Delete the first element of the languages array', function () {
      var languages = ['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
      var languages = DeletingFirstElement(languages);
      expect(languages).toEqual(['CSS', 'Javascript', 'PHP', 'Ruby', 'Python']);
  });
  it('Delete the last element of the languages array', function () {
      var languages = ['CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
      var languages = DeleteLastElement(languages);
      expect(languages).toEqual(['CSS', 'Javascript', 'PHP', 'Ruby']);
  });
  it('Make the "social_networks_chain" chain into a "social_networks" array', function () {
      var social_networks_chain = 'Facebook,Twitter,Google +,Viadeo,LinkedIn';
      var social_networks = ArrayStringConversion(social_networks_chain);
      expect(social_networks).toEqual(['Facebook','Twitter', 'Google +','Viadeo','LinkedIn']);
  });
  it('Make the "languages" array into a "languages_chaine" string. Separate languages with a comma', function () {
      var languages = ['CSS', 'Javascript', 'PHP', 'Ruby'];
      var languages_chain = ChainArrayConversion(languages);
      expect(languages_chain).toEqual("CSS,Javascript,PHP,Ruby");
  });
  it('Sort the "social_networks" array', function () {
      var social_networks = ['Facebook','Twitter', 'Google +','Viadeo','LinkedIn'];
      var social_networks = SortingArray(social_networks);
      expect(social_networks).toEqual(['Facebook','Google +','LinkedIn','Twitter','Viadeo']);
  });
  it('Bonus: Reverse the "languages" array', function () {
      var languages = ['CSS','Javascript','PHP','Ruby'];
      var languages = ReverseArray(languages);
      expect(languages).toEqual(["Ruby", "PHP", "Javascript", "CSS"]);
  });
});
