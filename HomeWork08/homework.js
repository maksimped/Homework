function getAge(people) { //Функция показывает Возраст
  return people.died - people.born;
};

function getPeopleByName(name, data) {
  return data.find(people => people.name === name); // Поиск по имени
};


function getDiffBeetwenMother(people, data) { //Разница в возрасте между матерью и детьми
  const mother = getPeopleByName(people.mother, data);
  if (!mother) {
    return null;
  }
  return getAge(mother) - getAge(people);
}

function getSum(arr) { // Функция суммы
  return arr.reduce(
    (sum, number) => sum + number,

  );
}

function getAverage(arr) { //Средний возраст
  return getSum(arr) / arr.length;
}

function task1(data) { // Task 1
  const ageDiffs = data
    .map(people => getDiffBeetwenMother(people, data))
    .filter(age => age !== null)
    .map(ageDiff => Math.abs(ageDiff));

  return getAverage(ageDiffs)
}

function getParents(people, data) { // Функция поиска родителей
  const mother = getPeopleByName(people.mother, data),
    father = getPeopleByName(people.father, data);

  if (!mother || !father) {
    return null;
  }
  return {
    father,
    mother
  }
}

function task2(data) {
  const familyDiff = data.map(people => getParents(people, data))
    .filter(parents => parents !== null)
    .reduce(
      (family, {
        mother,
        father
      }) => {
        const familyKey = `${mother.name}-${mother.born}-${father.name}-${father.born}`;

        if (!family[familyKey]) {
          family[familyKey] = Math.abs(getAge(mother) - getAge(father));

        }
        return family;
      }, {}
    );
  return getAverage(Object.values(familyDiff));
}

function getChildren(mother, father, data) {
  return data.filter(people => people.mother === mother && people.father === father);
}


function task3(data) {
  const familys = data.map(people => getParents(people, data))
    .filter(parents => parents !== null)
    .map(family => {
      family.children = getChildren(family.mother.name, family.father.name, data);
      return family;
    }),
    childrenCounts = familys.map(
      family => family.children.length
    );

  return getAverage(childrenCounts);


}


function getCentury(people){
return Math.ceil(people.died / 100);

}


function task4 (data){                                     ///Task 4
  const group = {};
  data.filter(people => {
    let century = getCentury(people);
    if (!(century in group)){
      group[century] = [people.died - people.born];
    }else if (century in group){
      group[century].push(people.died - people.born);
    }
  });
  return group;
}

console.log(task4(ANCESTRY_DATA));







