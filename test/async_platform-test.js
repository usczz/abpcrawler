/**
 * @fileOverview A platform-specific primitive set for the module async.js.
 */

/**
 * @namespace
 */
Async_Platform = {};

Async_Platform.dispatch = function( f )
{
  return setTimeout( f, 0 );
};

Async_Platform.set_timer = function( f, duration )
{
  return setTimeout( f, duration )
};

Async_Platform.clear_timer = function( id )
{
  clearTimeout( id );
};