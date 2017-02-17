function ordinal(d) {
	var s = ["th","st","nd","rd"],
  v = d % 100;
  return d+(s[(v-20)%10]||s[v]||s[0]);
}

function dateDifferenceInDays(date1, date2) {
	return Math.floor((date2 - date1) / (1000*60*60*24));
}

function dateDifferenceIsAYearOrMore(date1, date2) {
	return dateDifferenceInDays(date1, date2) >= 365;
}

function datesHaveTheSameMonth(date1, date2) {
	return date1.getMonth() === date2.getMonth();
}

function datesHaveTheSameYear(date1, date2) {
	return date1.getFullYear() === date2.getFullYear();
}

function datesAreEqual(date1, date2) {
	if (date1.getDate() !== date2.getDate()) {
		return false;
	}

	if (date1.getMonth() !== date2.getMonth()) {
		return false;
	}

	if (date1.getFullYear() !== date2.getFullYear()) {
		return false;
	}

	return true;
}

function makeFriendlyDates(arr) {
  const dateArr = arr.map(dateStr => new Date(dateStr));
  const locale = "en-uk";
  const currentYear = 2016; // (new Date().getFullYear())
  let from, to;
  [from, to] = dateArr;

  if (datesAreEqual(from, to)) {
  	return [`${from.toLocaleString(locale, { month: "long" })} ${ordinal(from.getDate())}, ${from.getFullYear()}`];
  }

  if (from.getFullYear() === to.getFullYear() && from.getMonth() === to.getMonth()) {
  	return [`${from.toLocaleString(locale, { month: "long" })} ${ordinal(from.getDate())}`, `${ordinal(to.getDate())}`];
  }

  if (from.getFullYear() === currentYear && !dateDifferenceIsAYearOrMore(from, to)) {
  	return [
  		`${from.toLocaleString(locale, { month: "long" })} ${ordinal(from.getDate())}`, 
  		`${to.toLocaleString(locale, { month: "long" })} ${ordinal(to.getDate())}`
  	];
  }

  if (from.getFullYear() !== currentYear && !dateDifferenceIsAYearOrMore(from, to)) {
  	return [
  		`${from.toLocaleString(locale, { month: "long" })} ${ordinal(from.getDate())}, ${from.getFullYear()}`, 
  		`${to.toLocaleString(locale, { month: "long" })} ${ordinal(to.getDate())}`
  	];
  }

  if (dateDifferenceIsAYearOrMore(from, to)) {
  	return [
  		`${from.toLocaleString(locale, { month: "long" })} ${ordinal(from.getDate())}, ${from.getFullYear()}`, 
  		`${to.toLocaleString(locale, { month: "long" })} ${ordinal(to.getDate())}, ${to.getFullYear()}`
  	];
  }

}