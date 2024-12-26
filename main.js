import redisClient from './utils/redis';

(async () => {
    

    console.log('Getting the value of "myKey" before setting it...');
    console.log('Value of "myKey":', await redisClient.get('myKey'));

    console.log('Setting "myKey" to 12 with a 5-second expiration...');
    await redisClient.set('myKey', 12, 5);

    console.log('Getting the value of "myKey" immediately after setting it...');
    console.log('Value of "myKey":', await redisClient.get('myKey'));

    console.log('Waiting 10 seconds to check the value of "myKey" after expiration...');
    setTimeout(async () => {
        console.log('Value of "myKey" after 10 seconds:', await redisClient.get('myKey'));
    }, 1000 * 10);

    console.log('Checking if Redis is alive...');
    console.log('Redis is alive:', redisClient.isAlive());
})();
