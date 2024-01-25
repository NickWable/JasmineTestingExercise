describe("Servers test", function() {
  beforeEach(function () {
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server to allServers on submitServerInfo() if input is empty', function () {
    serverNameInput.value = '';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should update server table on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();
    let curTdList = document.querySelectorAll('#serverTable tbody tr td');
    expect(curTdList.length).toEqual(2);
    expect(curTdList[0].innerText).toEqual('Alice');
    expect(curTdList[1].innerText).toEqual('$0.00');
  });

  it('should delete server on deleteServer()', function () {
    submitServerInfo();
    updateServerTable();
    let curTdList = document.querySelectorAll('#serverTable tbody tr td');
    deleteServer(curTdList[2]);
    expect(Object.keys(allServers).length).toEqual(0);
  });

  afterEach(function() {
    serverId = 0;
    allServers = {};
    serverTbody.innerHTML = '';

  });
});
