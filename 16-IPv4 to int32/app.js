/*
Take the following IPv4 address: 128.32.10.1 This address has 4 octets where each octet is a single byte (or 8 bits).
    
* 1st octet 128 has the binary representation: 10000000
* 2nd octet 32 has the binary representation: 00100000
* 3rd octet 10 has the binary representation: 00001010
* 4th octet 1 has the binary representation: 00000001

So 128.32.10.1 == 10000000.00100000.00001010.00000001

Because the above IP address has 32 bits, we can represent it as the 32 bit number: 2149583361.
*/

function ipToInt32(ip){
  let binary32 = '';
  // Convert ip address to binary
  ip.split('.').map( (value) => {
    binary32 += ((+value).toString(2)).padStart(8,'0'); // Pad with zeros to get an 8 bit binary
  });
  return parseInt(binary32,2); //Convert to int32
}

console.log( ipToInt32("128.32.10.1") ); //=> 2149583361