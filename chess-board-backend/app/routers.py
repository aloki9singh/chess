from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/top-players", response_model=List[schemas.Player])
def read_players(skip: int = 0, limit: int = 50, db: Session = Depends(get_db)):
    players = crud.get_players(db, skip=skip, limit=limit)
    return players

@router.get("/player/{username}/rating-history", response_model=List[schemas.RatingHistory])
def read_rating_history(username: str, db: Session = Depends(get_db)):
    player = crud.get_player_by_username(db, username=username)
    if player is None:
        raise HTTPException(status_code=404, detail="Player not found")
    return crud.get_rating_history(db, player_id=player.id)

@router.get("/players/rating-history-csv")
def get_rating_history_csv(db: Session = Depends(get_db)):
    # Logic to generate CSV
    pass
