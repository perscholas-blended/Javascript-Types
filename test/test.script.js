describe('JavaScript Functions Lab', () => {
  it('q1 should be a boolean', () => {
    expect(typeof x.q1).to.eql("boolean");
  });

  it('q2 should be a number', () => {
    expect(typeof x.q2).to.eql("number");
  });

  it('q3 should be a string', () => {
    expect(typeof x.q3).to.eql("string");
  });

  it('q4 should be NaN (not a number)', () => {
    expect(isNaN(x.q4)).to.eql(true);
  });

  it('q5 should be a boolean', () => {
    expect(typeof x.q5).to.eql("boolean");
  });

  it('q6 should be a boolean', () => {
    expect(x.q6 == false ).to.eql(true);
  });  

  it('q7 should be the GETTYSBURG ADDRESS IN ALL CAPS', () => {
    const upper = `
FOUR SCORE AND SEVEN YEARS AGO OUR FATHERS BROUGHT FORTH ON THIS CONTINENT, A NEW NATION, CONCEIVED IN LIBERTY, AND DEDICATED TO THE PROPOSITION THAT ALL MEN ARE CREATED EQUAL.
NOW WE ARE ENGAGED IN A GREAT CIVIL WAR, TESTING WHETHER THAT NATION, OR ANY NATION SO CONCEIVED AND SO DEDICATED, CAN LONG ENDURE. WE ARE MET ON A GREAT BATTLE-FIELD OF THAT WAR. WE HAVE COME TO DEDICATE A PORTION OF THAT FIELD, AS A FINAL RESTING PLACE FOR THOSE WHO HERE GAVE THEIR LIVES THAT THAT NATION MIGHT LIVE. IT IS ALTOGETHER FITTING AND PROPER THAT WE SHOULD DO THIS.
BUT, IN A LARGER SENSE, WE CAN NOT DEDICATE—WE CAN NOT CONSECRATE—WE CAN NOT HALLOW—THIS GROUND. THE BRAVE MEN, LIVING AND DEAD, WHO STRUGGLED HERE, HAVE CONSECRATED IT, FAR ABOVE OUR POOR POWER TO ADD OR DETRACT. THE WORLD WILL LITTLE NOTE, NOR LONG REMEMBER WHAT WE SAY HERE, BUT IT CAN NEVER FORGET WHAT THEY DID HERE. IT IS FOR US THE LIVING, RATHER, TO BE DEDICATED HERE TO THE UNFINISHED WORK WHICH THEY WHO FOUGHT HERE HAVE THUS FAR SO NOBLY ADVANCED. IT IS RATHER FOR US TO BE HERE DEDICATED TO THE GREAT TASK REMAINING BEFORE US—THAT FROM THESE HONORED DEAD WE TAKE INCREASED DEVOTION TO THAT CAUSE FOR WHICH THEY GAVE THE LAST FULL MEASURE OF DEVOTION—THAT WE HERE HIGHLY RESOLVE THAT THESE DEAD SHALL NOT HAVE DIED IN VAIN—THAT THIS NATION, UNDER GOD, SHALL HAVE A NEW BIRTH OF FREEDOM—AND THAT GOVERNMENT OF THE PEOPLE, BY THE PEOPLE, FOR THE PEOPLE, SHALL NOT PERISH FROM THE EARTH.
`
    expect(x.q7).to.eql(upper);
  });

  it('q8 should be the number of characters in the Gettsyburg Address', () => {
    expect(x.q8).to.eql(1454);
  });

  it('q9 should be an array of words in the Gettsyburg Address', () => {
    const expected = ["\nFour","score","and","seven","years","ago","our","fathers","brought","forth","on","this","continent,","a","new","nation,","conceived","in","Liberty,","and","dedicated","to","the","proposition","that","all","men","are","created","equal.\nNow","we","are","engaged","in","a","great","civil","war,","testing","whether","that","nation,","or","any","nation","so","conceived","and","so","dedicated,","can","long","endure.","We","are","met","on","a","great","battle-field","of","that","war.","We","have","come","to","dedicate","a","portion","of","that","field,","as","a","final","resting","place","for","those","who","here","gave","their","lives","that","that","nation","might","live.","It","is","altogether","fitting","and","proper","that","we","should","do","this.\nBut,","in","a","larger","sense,","we","can","not","dedicate—we","can","not","consecrate—we","can","not","hallow—this","ground.","The","brave","men,","living","and","dead,","who","struggled","here,","have","consecrated","it,","far","above","our","poor","power","to","add","or","detract.","The","world","will","little","note,","nor","long","remember","what","we","say","here,","but","it","can","never","forget","what","they","did","here.","It","is","for","us","the","living,","rather,","to","be","dedicated","here","to","the","unfinished","work","which","they","who","fought","here","have","thus","far","so","nobly","advanced.","It","is","rather","for","us","to","be","here","dedicated","to","the","great","task","remaining","before","us—that","from","these","honored","dead","we","take","increased","devotion","to","that","cause","for","which","they","gave","the","last","full","measure","of","devotion—that","we","here","highly","resolve","that","these","dead","shall","not","have","died","in","vain—that","this","nation,","under","God,","shall","have","a","new","birth","of","freedom—and","that","government","of","the","people,","by","the","people,","for","the","people,","shall","not","perish","from","the","earth.\n"];
    expect(x.q9).to.eql(expected);
  });

  it('q10 should be the number of words in the Gettsyburg Address', () => {
    expect(x.q10).to.eql(262);
  });

  it('q11 should be an array of words in the Gettsyburg Address, with periods removed', () => {
    const expected = ["\nFour","score","and","seven","years","ago","our","fathers","brought","forth","on","this","continent,","a","new","nation,","conceived","in","Liberty,","and","dedicated","to","the","proposition","that","all","men","are","created","equal\nNow","we","are","engaged","in","a","great","civil","war,","testing","whether","that","nation,","or","any","nation","so","conceived","and","so","dedicated,","can","long","endure","We","are","met","on","a","great","battle-field","of","that","war","We","have","come","to","dedicate","a","portion","of","that","field,","as","a","final","resting","place","for","those","who","here","gave","their","lives","that","that","nation","might","live","It","is","altogether","fitting","and","proper","that","we","should","do","this\nBut,","in","a","larger","sense,","we","can","not","dedicate—we","can","not","consecrate—we","can","not","hallow—this","ground","The","brave","men,","living","and","dead,","who","struggled","here,","have","consecrated","it,","far","above","our","poor","power","to","add","or","detract","The","world","will","little","note,","nor","long","remember","what","we","say","here,","but","it","can","never","forget","what","they","did","here","It","is","for","us","the","living,","rather,","to","be","dedicated","here","to","the","unfinished","work","which","they","who","fought","here","have","thus","far","so","nobly","advanced","It","is","rather","for","us","to","be","here","dedicated","to","the","great","task","remaining","before","us—that","from","these","honored","dead","we","take","increased","devotion","to","that","cause","for","which","they","gave","the","last","full","measure","of","devotion—that","we","here","highly","resolve","that","these","dead","shall","not","have","died","in","vain—that","this","nation,","under","God,","shall","have","a","new","birth","of","freedom—and","that","government","of","the","people,","by","the","people,","for","the","people,","shall","not","perish","from","the","earth\n"]
    expect(x.q11).to.eql(expected);
  });

  it('q12 should be an array of the length of each word in the Gettsyburg Address', () => {
    const expected = [5,5,3,5,5,3,3,7,7,5,2,4,10,1,3,7,9,2,8,3,9,2,3,11,4,3,3,3,7,9,2,3,7,2,1,5,5,4,7,7,4,7,2,3,6,2,9,3,2,10,3,4,6,2,3,3,2,1,5,12,2,4,3,2,4,4,2,8,1,7,2,4,6,2,1,5,7,5,3,5,3,4,4,5,5,4,4,6,5,4,2,2,10,7,3,6,4,2,6,2,9,2,1,6,6,2,3,3,11,3,3,13,3,3,11,6,3,5,4,6,3,5,3,9,5,4,11,3,3,5,3,4,5,2,3,2,7,3,5,4,6,5,3,4,8,4,2,3,5,3,2,3,5,6,4,4,3,4,2,2,3,2,3,7,7,2,2,9,4,2,3,10,4,5,4,3,6,4,4,4,3,2,5,8,2,2,6,3,2,2,2,4,9,2,3,5,4,9,6,7,4,5,7,4,2,4,9,8,2,4,5,3,5,4,4,3,4,4,7,2,13,2,4,6,7,4,5,4,5,3,4,4,2,9,4,7,5,4,5,4,1,3,5,2,11,4,10,2,3,7,2,3,7,3,3,7,5,3,6,4,3,6];
    expect(x.q12).to.eql(expected);
  });

  it('q13 should be the average word length in Gettsyburg Address', () => {
    const expected = 4.515267175572519;
    expect(x.q13).to.eql(expected);
  });
  
});