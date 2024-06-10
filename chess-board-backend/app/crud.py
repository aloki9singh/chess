from sqlalchemy.orm import Session
from . import models, schemas

def get_player(db: Session, player_id: int):
    return db.query(models.Player).filter(models.Player.id == player_id).first()

def get_player_by_username(db: Session, username: str):
    return db.query(models.Player).filter(models.Player.username == username).first()

def get_players(db: Session, skip: int = 0, limit: int = 50):
    return db.query(models.Player).offset(skip).limit(limit).all()

def create_player(db: Session, player: schemas.PlayerCreate):
    db_player = models.Player(**player.dict())
    db.add(db_player)
    db.commit()
    db.refresh(db_player)
    return db_player

def get_rating_history(db: Session, player_id: int):
    return db.query(models.RatingHistory).filter(models.RatingHistory.player_id == player_id).all()

def create_rating_history(db: Session, rating_history: schemas.RatingHistoryCreate):
    db_rating_history = models.RatingHistory(**rating_history.dict())
    db.add(db_rating_history)
    db.commit()
    db.refresh(db_rating_history)
    return db_rating_history
