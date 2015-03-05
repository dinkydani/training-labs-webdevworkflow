QUnit.test("Confirm model exists", function(assert) {
    assert.ok(window.beerApp.Beer, "The Beer model exists on the beerApp object");
});

QUnit.test("Empty Beer object gets defaults", function(assert) {
    var b = new window.beerApp.Beer();
    assert.ok(b, "The Beer object was created");
    assert.equal(b.name, "Beer", "The default name was used");
    assert.equal(b.abv, 0, "The default avb was used");
    assert.ok(Number(b.id), "An id was assigned");
    assert.ok(Number(b.created_at), "The Beer has a create timestamp");
    assert.equal(b.updated_at, b.created_at, "The Beer has an update timestamp that matches the create timestamp");

});

QUnit.test("Correct options are used if passed", function(assert){
  
  var b = new window.beerApp.Beer({
    name: "Shiner",
    brewery: "Spetzel",
    description: "Bock",
    abv: 4.5
  });

  assert.ok(b, "The Beer object was created");
  assert.equal(b.name, "Shiner", "The correct name was used");
  assert.equal(b.brewery, "Spetzel", "The correct brewery was used");
  assert.equal(b.description, "Bock", "The correct description was used");
  assert.equal(b.abv, 4.5, "The correct abv was used");
  
});